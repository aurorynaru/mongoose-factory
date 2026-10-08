# Config-only request generated from mongooseBrowserProfile; default is the Mongoose profile.
param([Parameter(Mandatory)][string]$StateFile, [Parameter(Mandatory)][string]$RequestFile, [string]$ResultFile)
& (Join-Path $PSScriptRoot 'OwnedService.ps1') -Action start -Kind chrome -StateFile $StateFile -RequestFile $RequestFile -ResultFile $ResultFile
exit $LASTEXITCODE
