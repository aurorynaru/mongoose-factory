Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
function Read-State([string]$file) {
    if (Test-Path -LiteralPath $file) { return Get-Content -LiteralPath $file -Raw | ConvertFrom-Json }
    return $null
}
function Write-State([string]$file, $state) {
    [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName([IO.Path]::GetFullPath($file))) | Out-Null
    $tmp = "$file.$([guid]::NewGuid()).tmp"
    $state | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $tmp -Encoding utf8
    Move-Item -LiteralPath $tmp -Destination $file -Force
}
function Process-Identity([int]$processId) {
    $p = Get-Process -Id $processId -ErrorAction SilentlyContinue
    if (-not $p) { return $null }
    $c = Get-CimInstance Win32_Process -Filter "ProcessId=$processId"
    if (-not $c.CommandLine -or -not $p.Path) { throw 'process_identity_unreadable' }
    $hash = [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData([Text.Encoding]::UTF8.GetBytes($c.CommandLine)))
    return @{ pid = $processId; exe = $p.Path; startTicks = [string]$p.StartTime.ToUniversalTime().Ticks; commandHash = $hash }
}
function Is-Owned($state, [string]$kind) {
    if (-not $state -or $state.kind -ne $kind) { return $false }
    $now = Process-Identity ([int]$state.pid)
    return $now -and $now.exe -ieq $state.exe -and $now.startTicks -eq $state.startTicks -and $now.commandHash -eq $state.commandHash
}
function Port-Listeners([int]$port) {
    return @(Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue)
}
function Is-OwnedPort($state, [string]$kind) {
    if (-not (Is-Owned $state $kind)) { return $false }
    $listeners = @(Port-Listeners ([int]$state.port))
    if (-not $listeners.Count) { return $false }
    foreach ($l in $listeners) { if ($l.OwningProcess -ne $state.pid -or $l.LocalAddress -notin @('127.0.0.1', '::1')) { return $false } }
    return $true
}
function Canonical-Profile([string]$profile) {
    $full = [IO.Path]::GetFullPath($profile).TrimEnd('\', '/')
    $part = $full
    while ($part) {
        if (Test-Path -LiteralPath $part) {
            $item = Get-Item -LiteralPath $part -Force
            if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw 'profile_reparse_point_refused' }
        }
        $parent = [IO.Path]::GetDirectoryName($part)
        if ($parent -eq $part) { break }; $part = $parent
    }
    $default = [IO.Path]::GetFullPath((Join-Path $env:LOCALAPPDATA 'Google\Chrome\User Data')).TrimEnd('\')
    if ($full -ieq $default -or $full.StartsWith("$default\", [StringComparison]::OrdinalIgnoreCase)) { throw 'default_chrome_profile_refused' }
    return $full
}
function Assert-ProfileFree([string]$profile) {
    foreach ($c in @(Get-CimInstance Win32_Process -Filter "Name='chrome.exe'")) {
        if (-not $c.CommandLine) { throw 'chrome_process_scope_unreadable' }
        $m = [regex]::Match($c.CommandLine, '"--user-data-dir=([^"]+)"|--user-data-dir(?:=|\s+)"([^"]+)"|--user-data-dir(?:=|\s+)([^\s"]+)', 'IgnoreCase')
        if ($m.Success) {
            $value = (@($m.Groups | Select-Object -Skip 1 | Where-Object Success | Select-Object -First 1)).Value
            if ([IO.Path]::GetFullPath($value).TrimEnd('\','/') -ieq $profile) { throw 'chrome_profile_in_use' }
        }
    }
}
function Stop-Owned([string]$file, [string]$kind) {
    $s = Read-State $file
    if (-not $s) { return @{ ok = $true; action = 'not_running' } }
    if (-not (Is-Owned $s $kind)) { throw 'not_owned_or_stale_state' }
    foreach ($l in @(Port-Listeners ([int]$s.port))) { if ($l.OwningProcess -ne $s.pid) { throw 'port_ownership_mismatch' } }
    & taskkill.exe /PID ([int]$s.pid) /T /F | Out-Null
    if ($LASTEXITCODE -ne 0) { throw 'owned_tree_stop_failed' }
    $deadline = (Get-Date).AddSeconds(15)
    while ((Process-Identity ([int]$s.pid)) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 100 }
    if (Process-Identity ([int]$s.pid)) { throw 'owned_process_still_alive' }
    Remove-Item -LiteralPath $file -Force
    return @{ ok = $true; action = 'stopped'; pid = $s.pid; kind = $kind }
}
