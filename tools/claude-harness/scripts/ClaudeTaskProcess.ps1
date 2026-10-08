param([ValidateSet('inspect','stop')][string]$Action, [int]$ProcessId, [string]$StateFile)
. (Join-Path $PSScriptRoot 'OwnedService.Common.ps1')
try {
    if ($Action -eq 'inspect') {
        $s = Process-Identity $ProcessId
        if (-not $s) { throw 'task_not_alive' }; $s.kind = 'worker'
        $s | ConvertTo-Json -Compress
    } else {
        $s = Read-State $StateFile
        if (-not (Is-Owned $s 'worker')) { throw 'task_not_owned' }
        & taskkill.exe /PID ([int]$s.pid) /T /F | Out-Null
        if ($LASTEXITCODE -ne 0) { throw 'task_tree_stop_failed' }
        $deadline = (Get-Date).AddSeconds(10)
        while ((Process-Identity ([int]$s.pid)) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 100 }
        if (Process-Identity ([int]$s.pid)) { throw 'task_still_alive' }
        Write-Output '{"ok":true}'
    }
} catch { @{ok=$false;error=$_.Exception.Message} | ConvertTo-Json -Compress; exit 1 }
