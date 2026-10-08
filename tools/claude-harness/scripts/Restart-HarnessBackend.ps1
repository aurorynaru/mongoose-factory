<#
.SYNOPSIS
  Restart ONLY the harness-owned OpenCode backend. Never touches other OpenCode processes.
.DESCRIPTION
  Stops the process recorded in <StateFile> (only if PID, executable and start time still match)
  together with its child processes (MCP servers, including the Mongoose browser they launched),
  then starts a new backend. If the port is held by a process the harness does not own, it refuses.
  Restarting the backend is NOT the same as starting a fresh OpenCode conversation: sessions are
  stored by OpenCode and survive a restart; an in-flight task does not.
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)][ValidateRange(1024, 65535)][int]$Port,
    [Parameter(Mandatory)][string]$ProjectDir,
    [Parameter(Mandatory)][string]$StateFile,
    [Parameter(Mandatory)][string]$LogDir,
    [string]$Executable = '',
    [string]$PasswordEnv = 'OPENCODE_SERVER_PASSWORD',
    [ValidateRange(5, 600)][int]$StartupTimeoutSeconds = 60,
    [string]$ResultFile = ''
)
. (Join-Path $PSScriptRoot 'HarnessBackend.Common.ps1')
$global:HarnessResultFile = $ResultFile
try {
    $stop = Stop-OwnedBackend $StateFile
    $start = Start-OwnedBackend -Port $Port -ProjectDir $ProjectDir -StateFile $StateFile -LogDir $LogDir `
        -Executable $Executable -PasswordEnv $PasswordEnv -StartupTimeoutSeconds $StartupTimeoutSeconds
    $start['stop'] = $stop
    $start['action'] = 'restarted'
    Write-Result $start
} catch {
    Write-Result @{ ok = $false; error = 'exception'; detail = $_.Exception.Message }
    exit 1
}
