<#
.SYNOPSIS
  Convenience wrapper: .\claude-harness.ps1 <command> [options]   (same as: node dist\cli.js ...)
  Builds dist\ on first use.
#>
$ErrorActionPreference = 'Stop'
$here = $PSScriptRoot
if (-not (Test-Path (Join-Path $here 'dist\cli.js'))) {
    Push-Location $here
    try { npm run build | Out-Host } finally { Pop-Location }
}
& node (Join-Path $here 'dist\cli.js') @args
exit $LASTEXITCODE
