<#
.SYNOPSIS
  Start the harness-owned OpenCode backend (`opencode serve`) bound to 127.0.0.1.
.DESCRIPTION
  Runs `opencode serve --port <Port> --hostname 127.0.0.1` with <ProjectDir> as the working
  directory (so the project's opencode.json, AGENTS.md and Playwright MCP settings apply).
  Records PID + executable + start time in <StateFile>; that record is what makes the
  process "owned". Refuses to start if the port is held by any process it does not own.
  If OPENCODE_SERVER_PASSWORD (or -PasswordEnv) is set, the server inherits it and requires Basic auth.
.EXAMPLE
  pwsh -NoProfile -File Start-HarnessBackend.ps1 -Port 4096 -ProjectDir C:\AI\mongoose-factory `
       -StateFile ..\claude-data\backend\backend-state.json -LogDir ..\claude-data\backend\logs
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
    Write-Result (Start-OwnedBackend -Port $Port -ProjectDir $ProjectDir -StateFile $StateFile -LogDir $LogDir `
            -Executable $Executable -PasswordEnv $PasswordEnv -StartupTimeoutSeconds $StartupTimeoutSeconds)
} catch {
    Write-Result @{ ok = $false; error = 'exception'; detail = $_.Exception.Message }
    exit 1
}
