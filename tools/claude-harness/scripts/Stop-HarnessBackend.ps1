<#
.SYNOPSIS
  Stop the harness-owned OpenCode backend (and its child processes). Refuses anything not owned.
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$StateFile,
    [string]$ResultFile = ''
)
. (Join-Path $PSScriptRoot 'HarnessBackend.Common.ps1')
$global:HarnessResultFile = $ResultFile
try {
    $r = Stop-OwnedBackend $StateFile
    $r['ok'] = $true
    Write-Result $r
} catch {
    Write-Result @{ ok = $false; error = 'exception'; detail = $_.Exception.Message }
    exit 1
}
