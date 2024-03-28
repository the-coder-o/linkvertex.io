import { Dispatch, SetStateAction } from "react";

export interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
}

export interface InstallPromptContextState {
  installPrompt: InstallPromptEvent | null;
  setInstallPrompt: Dispatch<SetStateAction<InstallPromptEvent | null>>;
  isAppInstalled: boolean;
  setIsAppInstalled: Dispatch<SetStateAction<boolean>>;
}
