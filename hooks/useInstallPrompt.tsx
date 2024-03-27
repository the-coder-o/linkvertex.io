"use client";

import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
}

interface InstallPromptContextState {
  installPrompt: InstallPromptEvent | null;
  setInstallPrompt: Dispatch<SetStateAction<InstallPromptEvent | null>>;
  isAppInstalled: boolean;
  setIsAppInstalled: Dispatch<SetStateAction<boolean>>;
}

const InstallPromptContext = createContext<InstallPromptContextState | undefined>(undefined);

export const useInstallPrompt = () => {
  const context = useContext(InstallPromptContext);
  if (context === undefined) {
    throw new Error("useInstallPrompt must be used within a InstallPromptProvider");
  }
  return context;
};

interface InstallPromptProviderProps {
  children: ReactNode;
}

export const InstallPromptProvider: React.FC<InstallPromptProviderProps> = ({ children }) => {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: InstallPromptEvent) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);
    setIsAppInstalled(localStorage.getItem("isAppInstalled") === "true");

    return () => {
      window.removeEventListener("beforeinstallprompt", handler as EventListener);
    };
  }, []);

  const value = { installPrompt, setInstallPrompt, isAppInstalled, setIsAppInstalled };

  return <InstallPromptContext.Provider value={value}>{children}</InstallPromptContext.Provider>;
};
