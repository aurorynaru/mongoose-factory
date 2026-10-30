param(
  [string]$BackendURL = 'https://cs16backend-production.up.railway.app',
  [int]$Port = 0
)

$ErrorActionPreference = 'Stop'
$nodeExecutable = (Get-Command node -ErrorAction Stop).Source
$privateToken = Read-Host 'Enter CS16_ADMIN_TOKEN (kept in the local server process only)' -AsSecureString
$tokenPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($privateToken)
$previewProcess = $null
try {
  $plainToken = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($tokenPointer)
  if ($plainToken.Length -lt 32) { throw 'The backend admin token must be at least 32 characters.' }
  $startInfo = New-Object Diagnostics.ProcessStartInfo
  $startInfo.FileName = $nodeExecutable
  $startInfo.Arguments = 'server.cjs'
  $startInfo.WorkingDirectory = $PSScriptRoot
  $startInfo.UseShellExecute = $false
  $startInfo.CreateNoWindow = $true
  $startInfo.RedirectStandardOutput = $true
  $startInfo.RedirectStandardError = $true
  $startInfo.EnvironmentVariables['CS16_BACKEND_URL'] = $BackendURL
  $startInfo.EnvironmentVariables['CS16_ADMIN_TOKEN'] = $plainToken
  $startInfo.EnvironmentVariables['FX_CS16_PREVIEW_PORT'] = [string]$Port
  Write-Host '[FX_CS16Local] Starting local preview; the localhost URL will appear below.'
  $previewProcess = [Diagnostics.Process]::Start($startInfo)
  $plainToken = $null
  # VS Code terminals do not reliably inherit output handles for a hidden child.
  # Drain both streams concurrently so errors remain visible without deadlocking.
  $outputLine = $previewProcess.StandardOutput.ReadLineAsync()
  $errorLine = $previewProcess.StandardError.ReadLineAsync()
  while ($null -ne $outputLine -or $null -ne $errorLine) {
    if ($null -ne $outputLine -and $outputLine.IsCompleted) {
      $line = $outputLine.GetAwaiter().GetResult()
      if ($null -eq $line) { $outputLine = $null }
      else {
        Write-Host $line
        $outputLine = $previewProcess.StandardOutput.ReadLineAsync()
      }
    }
    if ($null -ne $errorLine -and $errorLine.IsCompleted) {
      $line = $errorLine.GetAwaiter().GetResult()
      if ($null -eq $line) { $errorLine = $null }
      else {
        Write-Host $line
        $errorLine = $previewProcess.StandardError.ReadLineAsync()
      }
    }
    if ($null -ne $outputLine -or $null -ne $errorLine) { Start-Sleep -Milliseconds 50 }
  }
  $previewProcess.WaitForExit()
  exit $previewProcess.ExitCode
} finally {
  if ($null -ne $previewProcess -and -not $previewProcess.HasExited) {
    $previewProcess.Kill()
    $previewProcess.WaitForExit()
  }
  $plainToken = $null
  [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($tokenPointer)
  $privateToken.Dispose()
}
