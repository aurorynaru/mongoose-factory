<#
.SYNOPSIS
  Report health and ownership of the OpenCode backend on <Port>. Read-only.
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)][ValidateRange(1024, 65535)][int]$Port,
    [Parameter(Mandatory)][string]$StateFile,
    [string]$PasswordEnv = 'OPENCODE_SERVER_PASSWORD',
    [string]$ResultFile = ''
)
. (Join-Path $PSScriptRoot 'HarnessBackend.Common.ps1')
$global:HarnessResultFile = $ResultFile
try {
    $state = Read-BackendState $StateFile
    $owned = Test-OwnedOnPort $state $Port
    $h = Invoke-BackendHealth -Port $Port -PasswordEnv $PasswordEnv
    $ownedPid = $(if ($state) { [int](Get-Prop $state 'pid') } else { $null })
    $others = @(Get-Process -Name opencode -ErrorAction SilentlyContinue | Where-Object { -not $owned -or $_.Id -ne $ownedPid } | ForEach-Object { $_.Id })
    Write-Result @{
        ok = [bool]$h['healthy']; healthy = [bool]$h['healthy']; version = $h['version']; error = $h['error']
        owned = $owned; pid = $ownedPid
        portOwnerPid = (Get-PortOwnerPid $Port); otherOpenCodePids = $others; port = $Port
    }
} catch {
    Write-Result @{ ok = $false; error = 'exception'; detail = $_.Exception.Message }
    exit 1
}
