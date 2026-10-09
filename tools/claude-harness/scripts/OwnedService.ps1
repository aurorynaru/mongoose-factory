param(
    [Parameter(Mandatory)][ValidateSet('start','health','stop','restart')][string]$Action,
    [Parameter(Mandatory)][ValidateSet('chrome','mcp')][string]$Kind,
    [Parameter(Mandatory)][string]$StateFile,
    [string]$RequestFile,
    [string]$ResultFile
)
. (Join-Path $PSScriptRoot 'OwnedService.Common.ps1')
$result = $null; $lock = $null
try {
    if ($Action -eq 'health') {
        $s = Read-State $StateFile; $owned = [bool](Is-OwnedPort $s $Kind)
        $result = @{ ok = $owned; owned = $owned; kind = $Kind; state = $s }
    } elseif ($Action -eq 'stop') { $result = Stop-Owned $StateFile $Kind }
    else {
        if (-not $RequestFile) { throw 'missing_start_request' }
        $r = Get-Content -LiteralPath $RequestFile -Raw | ConvertFrom-Json
        if ($r.kind -ne $Kind -or $r.port -lt 1024 -or $r.port -gt 65535) { throw 'invalid_start_request' }
        [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName([IO.Path]::GetFullPath($StateFile))) | Out-Null
        $lock = [IO.File]::Open("$StateFile.lock", 'OpenOrCreate', 'ReadWrite', 'None')
        if ($Action -eq 'restart') { $null = Stop-Owned $StateFile $Kind }
        $s = Read-State $StateFile
        if ($s) {
            if (-not (Is-Owned $s $Kind)) { throw 'stale_state_requires_operator_review' }
            $optionsMatch = $s.requestHash -eq $r.requestHash
            $optionDrift = $Kind -eq 'chrome' -and $r.PSObject.Properties['launchScopeHash'] -and (
                $s.requestHash -eq $r.launchScopeHash -or ($s.PSObject.Properties['launchScopeHash'] -and $s.launchScopeHash -eq $r.launchScopeHash))
            if ($s.port -ne $r.port -or (-not $optionsMatch -and -not $optionDrift)) { throw 'owned_service_configuration_mismatch' }
            if (-not (Is-OwnedPort $s $Kind)) { throw 'owned_service_not_listening' }
            $result = @{ ok = $true; action = 'already_running'; kind = $Kind; pid = $s.pid }
            if ($optionDrift -and -not $optionsMatch) {
                $result.launchOptions = 'outdated'
                $result.warning = 'running with outdated launch options; apply the new options at the next operator-controlled Chrome start'
            }
        } else {
            if (@(Port-Listeners ([int]$r.port)).Count) { throw 'port_in_use_by_unowned_process' }
            if ($Kind -eq 'chrome') { $profile = Canonical-Profile $r.profile; Assert-ProfileFree $profile; [IO.Directory]::CreateDirectory($profile) | Out-Null }
            [IO.Directory]::CreateDirectory($r.logDir) | Out-Null
            $stamp = [guid]::NewGuid().ToString()
            $arguments = @($r.argv | ForEach-Object { '"' + ($_ -replace '(\\*)"', '$1$1\"' -replace '(\\+)$', '$1$1') + '"' })
            $windowStyle = 'Hidden'
            if ($Kind -eq 'chrome' -and $r.windowStyle) {
                if ($r.windowStyle -notin @('normal','minimized','hidden')) { throw 'invalid_chrome_window_style' }
                $windowStyle = $r.windowStyle
            }
            $p = Start-Process -FilePath $r.executable -ArgumentList $arguments -WorkingDirectory $r.cwd -WindowStyle $windowStyle -PassThru -RedirectStandardOutput (Join-Path $r.logDir "$stamp.out.log") -RedirectStandardError (Join-Path $r.logDir "$stamp.err.log")
            $identity = Process-Identity $p.Id
            if (-not $identity) { throw 'service_exited_at_start' }
            $identity.kind = $Kind; $identity.port = $r.port; $identity.requestHash = $r.requestHash
            $identity.profile = $r.profile; $identity.cwd = $r.cwd
            $identity.effectiveArguments = @($r.argv)
            if ($r.PSObject.Properties['launchScopeHash']) { $identity.launchScopeHash = $r.launchScopeHash }
            Write-State $StateFile $identity
            $deadline = (Get-Date).AddSeconds(30)
            while ((Get-Date) -lt $deadline -and -not (Is-OwnedPort $identity $Kind)) {
                if ($p.HasExited) { break }; Start-Sleep -Milliseconds 150
            }
            if (-not (Is-OwnedPort $identity $Kind)) {
                if (Is-Owned $identity $Kind) { $null = Stop-Owned $StateFile $Kind }
                throw 'service_start_failed_or_nonloopback_listener'
            }
            $result = @{ ok = $true; action = 'started'; pid = $p.Id; kind = $Kind; port = $r.port; effectiveArguments = @($r.argv) }
        }
    }
} catch { $result = @{ ok = $false; error = $_.Exception.Message; kind = $Kind } }
finally { if ($lock) { $lock.Dispose() } }
$json = $result | ConvertTo-Json -Depth 12 -Compress
if ($ResultFile) { Set-Content -LiteralPath $ResultFile -Value $json -Encoding utf8 }
Write-Output $json
if (-not $result.ok) { exit 1 }
