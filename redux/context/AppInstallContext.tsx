import React, {createContext, ReactNode, useContext, useState} from 'react';

interface InstallPromptContextType {
    canInstall: boolean;
    setCanInstall: (value: boolean) => void;
}

const InstallPromptContext = createContext<InstallPromptContextType | undefined>(undefined);

export const useInstallPrompt = () => {
    const context = useContext(InstallPromptContext);
    if (!context) throw new Error('useInstallPrompt must be used within a InstallPromptProvider');
    return context;
};

export const InstallPromptProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [canInstall, setCanInstall] = useState(false);

    return (
        <InstallPromptContext.Provider value={{ canInstall, setCanInstall }}>
            {children}
        </InstallPromptContext.Provider>
    );
};
