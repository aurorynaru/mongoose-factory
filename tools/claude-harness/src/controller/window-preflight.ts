import type { HarnessConfig } from "../config.js";
import type { WorkerPort } from "../adapters/types.js";

/** Browser-level window commands only; never authenticate or interact with the page. */
export async function prepareWorkerWindow(worker:WorkerPort,config:HarnessConfig) {
  if(!worker.windowState)throw Error("Worker window-state check is unavailable");
  const before=await worker.windowState();
  let chromeWindow=before,windowRestore;
  if(before.windowState==="minimized") {
    if(!config.chrome.autoRestoreMinimized)throw Error("restore the Chrome window first (automatic restore is disabled)");
    if(!worker.restoreWindow)throw Error("Chrome window restore failed: worker restore is unavailable");
    try {
      chromeWindow=await worker.restoreWindow();
      if(chromeWindow.windowState!=="maximized"||chromeWindow.targetId!==before.targetId||chromeWindow.windowId!==before.windowId)
        throw Error("restore did not verify the same owned window maximized");
    }catch(error){throw Error(`Chrome window restore failed: ${(error as Error).message}`);}
    windowRestore={status:"restored",before,after:chromeWindow};
  }
  return {chromeWindow,windowState:chromeWindow.windowState,bounds:chromeWindow.bounds,...(windowRestore?{windowRestore}:{})};
}
