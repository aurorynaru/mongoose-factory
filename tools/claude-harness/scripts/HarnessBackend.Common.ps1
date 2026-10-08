# Shared helpers for the harness-owned OpenCode backend scripts.
# Ownership rule: the harness only ever stops a process whose PID, executable path AND
# start time match the state file it wrote when it started that process.

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if (-not (Test-Path variable:global:HarnessResultFile)) { $global:HarnessResultFile = '' }

function Write-Result([hashtable]$Result) {
    # Single JSON line on stdout. When -ResultFile is given (as the Node controller does), the
    # result is also written there: Start-Process lets opencode.exe inherit this script's stdout
    # pipe, so a caller waiting for the pipe to close would wait for OpenCode to exit.
    $json = $Result | ConvertTo-Json -Compress -Depth 5
    if ($global:HarnessResultFile) { Set-Content -LiteralPath $global:HarnessResultFile -Value $json -Encoding utf8 }
    Write-Output $json
}

function Get-Prop($Object, [string]$Name) {
    # StrictMode-safe property/key read (returns $null when absent).
    if ($null -eq $Object) { return $null }
    if ($Object -is [hashtable]) { return $Object[$Name] }
    $p = $Object.PSObject.Properties[$Name]
    if ($p) { return $p.Value }
    return $null
}

function Resolve-OpenCodeExe([string]$Executable) {
    if ($Executable) {
        if (-not (Test-Path -LiteralPath $Executable)) { throw "OpenCode executable not found: $Executable" }
        return (Resolve-Path -LiteralPath $Executable).Path
    }
    $cmd = Get-Command opencode -ErrorAction SilentlyContinue | Select-Object -First 1
    if (-not $cmd) { throw 'opencode is not on PATH; set opencode.executable in harness.config.json' }
    $src = $cmd.Source
    if ($src -like '*.exe') { return $src }
    # npm shim (opencode.cmd / opencode.ps1): use the real binary so the PID we track is OpenCode itself.
    $candidate = Join-Path (Split-Path -Parent $src) 'node_modules\opencode-ai\bin\opencode.exe'
    if (Test-Path -LiteralPath $candidate) { return (Resolve-Path -LiteralPath $candidate).Path }
    throw "Could not resolve opencode.exe from shim $src; set opencode.executable explicitly"
}

function Read-BackendState([string]$StateFile) {
    if (-not (Test-Path -LiteralPath $StateFile)) { return $null }
    return Get-Content -LiteralPath $StateFile -Raw | ConvertFrom-Json
}

function Write-BackendState([string]$StateFile, [hashtable]$State) {
    $dir = Split-Path -Parent $StateFile
    if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $tmp = "$StateFile.tmp"
    ($State | ConvertTo-Json -Depth 5) | Set-Content -LiteralPath $tmp -Encoding utf8
    Move-Item -LiteralPath $tmp -Destination $StateFile -Force
}

function Test-OwnedProcess($State) {
    if (-not $State) { return $false }
    $p = Get-Process -Id ([int]$State.pid) -ErrorAction SilentlyContinue
    if (-not $p) { return $false }
    try {
        $ticks = $p.StartTime.ToUniversalTime().Ticks
        $path = $p.Path
    } catch { return $false }
    return ([string]$ticks -eq [string](Get-Prop $State 'startTicks')) -and ($path -ieq [string](Get-Prop $State 'exe'))
}

function Test-OwnedOnPort($State, [int]$Port) {
    # Owned AND actually the process listening on this port (a live owned process on another
    # port does not make this port ours).
    if (-not (Test-OwnedProcess $State)) { return $false }
    return ((Get-PortOwnerPid $Port) -eq [int](Get-Prop $State 'pid'))
}

function Get-PortOwnerPid([int]$Port) {
    $c = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($c) { return [int]$c.OwningProcess }
    return $null
}

function Invoke-BackendHealth([int]$Port, [string]$PasswordEnv) {
    $headers = @{}
    $pw = [Environment]::GetEnvironmentVariable($PasswordEnv)
    if ($pw) {
        $pair = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("opencode:$pw"))
        $headers['Authorization'] = "Basic $pair"
    }
    try {
        $r = Invoke-RestMethod -Uri "http://127.0.0.1:$Port/global/health" -Headers $headers -TimeoutSec 5
        return @{ healthy = [bool]$r.healthy; version = [string]$r.version }
    } catch {
        return @{ healthy = $false; error = $_.Exception.Message }
    }
}

function Stop-OwnedBackend([string]$StateFile) {
    $state = Read-BackendState $StateFile
    if (-not $state) { return @{ stopped = $false; reason = 'no_state' } }
    if (-not (Test-OwnedProcess $state)) {
        Remove-Item -LiteralPath $StateFile -Force -ErrorAction SilentlyContinue
        return @{ stopped = $false; reason = 'not_running_or_not_owned'; pid = $state.pid }
    }
    # /T also ends the backend's own children (MCP servers and the Mongoose browser they launched).
    & taskkill.exe /PID ([int]$state.pid) /T /F | Out-Null
    $deadline = (Get-Date).AddSeconds(15)
    while ((Get-Process -Id ([int]$state.pid) -ErrorAction SilentlyContinue) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 250 }
    Remove-Item -LiteralPath $StateFile -Force -ErrorAction SilentlyContinue
    return @{ stopped = $true; pid = $state.pid }
}

function Start-OwnedBackend([int]$Port, [string]$ProjectDir, [string]$StateFile, [string]$LogDir, [string]$Executable, [string]$PasswordEnv, [int]$StartupTimeoutSeconds) {
    $state = Read-BackendState $StateFile
    if ($state -and (Test-OwnedProcess $state) -and ([int](Get-Prop $state 'port') -ne $Port)) {
        return @{ ok = $false; error = 'owned_backend_running_on_other_port'; pid = $state.pid; port = (Get-Prop $state 'port') }
    }
    if ($state -and (Test-OwnedOnPort $state $Port)) {
        $h = Invoke-BackendHealth -Port $Port -PasswordEnv $PasswordEnv
        if ($h['healthy']) { return @{ ok = $true; action = 'already_running'; pid = $state.pid; port = $Port; version = $h['version'] } }
        return @{ ok = $false; error = 'owned_but_unhealthy'; pid = $state.pid; detail = 'use Restart-HarnessBackend.ps1' }
    }
    $owner = Get-PortOwnerPid $Port
    if ($owner) { return @{ ok = $false; error = 'port_in_use_by_unowned_process'; ownerPid = $owner; port = $Port } }
    if (-not (Test-Path -LiteralPath $ProjectDir)) { return @{ ok = $false; error = 'project_dir_missing'; projectDir = $ProjectDir } }

    $exe = Resolve-OpenCodeExe $Executable
    if (-not (Test-Path -LiteralPath $LogDir)) { New-Item -ItemType Directory -Force -Path $LogDir | Out-Null }
    $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $out = Join-Path $LogDir "opencode-$stamp.out.log"
    $err = Join-Path $LogDir "opencode-$stamp.err.log"
    $p = Start-Process -FilePath $exe -ArgumentList @('serve', '--port', "$Port", '--hostname', '127.0.0.1') `
        -WorkingDirectory $ProjectDir -RedirectStandardOutput $out -RedirectStandardError $err -WindowStyle Hidden -PassThru
    $p.Refresh()
    Write-BackendState $StateFile @{
        pid = $p.Id; port = $Port; exe = $exe; projectDir = $ProjectDir
        startTicks = [string]$p.StartTime.ToUniversalTime().Ticks
        startedAt = (Get-Date).ToString('o'); stdout = $out; stderr = $err
    }
    $deadline = (Get-Date).AddSeconds($StartupTimeoutSeconds)
    while ((Get-Date) -lt $deadline) {
        if ($p.HasExited) { break }
        $h = Invoke-BackendHealth -Port $Port -PasswordEnv $PasswordEnv
        if ($h['healthy']) { return @{ ok = $true; action = 'started'; pid = $p.Id; port = $Port; version = $h['version']; stdout = $out; stderr = $err } }
        Start-Sleep -Milliseconds 500
    }
    $null = Stop-OwnedBackend $StateFile
    return @{ ok = $false; error = 'did_not_become_healthy'; exited = $p.HasExited; stdout = $out; stderr = $err }
}
