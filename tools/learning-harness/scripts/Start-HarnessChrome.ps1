<#
.SYNOPSIS
  OPTIONAL (browser.mode = "cdp"): start a separate Chrome for the harness with a localhost-only
  DevTools endpoint, so the harness can attach to it and the window survives between commands.
.DESCRIPTION
  Uses a DEDICATED profile directory. Refuses your normal Chrome profile and the OpenCode Mongoose
  profile. The DevTools port is bound to 127.0.0.1. Anything that can reach this port can control
  this browser, so keep it local and close this Chrome when you are not using the harness.
  Sign in to ChatGPT manually in the window that opens.
#>
[CmdletBinding()]
param(
    [ValidateRange(1024, 65535)][int]$Port = 9223,
    [Parameter(Mandatory)][string]$UserDataDir,
    [string]$ChromePath = '',
    [string]$MongooseProfile = 'C:\AI\mongoose-playwright-profile'
)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$full = [IO.Path]::GetFullPath($UserDataDir)
$defaultProfile = [IO.Path]::GetFullPath((Join-Path $env:LOCALAPPDATA 'Google\Chrome\User Data'))
if ($full -ieq $defaultProfile) { throw 'Refusing to expose your default Chrome profile over DevTools. Use a dedicated -UserDataDir.' }
if ($full -ieq [IO.Path]::GetFullPath($MongooseProfile)) { throw 'The harness profile must be separate from the OpenCode Mongoose profile.' }

if (-not $ChromePath) {
    foreach ($c in @("$env:ProgramFiles\Google\Chrome\Application\chrome.exe", "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe", "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe")) {
        if (Test-Path -LiteralPath $c) { $ChromePath = $c; break }
    }
}
if (-not $ChromePath) { throw 'chrome.exe not found; pass -ChromePath' }
if (Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue) { throw "Port $Port is already in use." }

New-Item -ItemType Directory -Force -Path $full | Out-Null
$p = Start-Process -FilePath $ChromePath -PassThru -ArgumentList @(
    "--remote-debugging-port=$Port", '--remote-debugging-address=127.0.0.1',
    "--user-data-dir=$full", '--no-first-run', '--no-default-browser-check', 'https://chatgpt.com/')
Write-Output (@{ ok = $true; pid = $p.Id; cdpUrl = "http://127.0.0.1:$Port"; userDataDir = $full } | ConvertTo-Json -Compress)
