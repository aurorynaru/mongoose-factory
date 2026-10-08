param([Parameter(Mandatory)][string]$StateFile, [string]$RequestFile, [string]$ResultFile)
& (Join-Path $PSScriptRoot 'OwnedService.ps1') -Action health -Kind mcp -StateFile $StateFile -RequestFile $RequestFile -ResultFile $ResultFile
exit $LASTEXITCODE
