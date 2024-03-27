"use client";

import React, { ReactNode } from "react";

import i18n from "@/i18n/i18n";
import { Toaster } from "sonner";

import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

import { InstallPromptProvider } from "@/hooks/useInstallPrompt";
import { Client, HydrationProvider } from "react-hydration-provider";

import { I18nextProvider } from "react-i18next";

import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/ui/header/header";
import { DotBackgroundDemo } from "@/components/animation/dot-background";
import { WavyBackground } from "@/components/animation/background-gradient-animation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <HydrationProvider>
        <I18nextProvider i18n={i18n}>
          <Client>
            <InstallPromptProvider>{children}</InstallPromptProvider>
            <Header />
            <Analytics />
            <WavyBackground />
            <DotBackgroundDemo />
            <Toaster position="top-right" />
          </Client>
        </I18nextProvider>
      </HydrationProvider>
    </ClerkProvider>
  );
};

export default Layout;
