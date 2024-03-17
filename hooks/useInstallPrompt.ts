'use client'

import {useEffect, useState} from "react";

interface InstallPromptEvent extends Event {
    prompt: () => Promise<{ outcome: 'accepted' | 'dismissed', platform: string }>;
}

export const useInstallPrompt = () => {
    const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: Event) => {
            event.preventDefault();
            setInstallPrompt(event as InstallPromptEvent);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    return [installPrompt, setInstallPrompt] as const;
};
