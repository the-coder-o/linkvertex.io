"use client";

import { ReactNode } from "react";

import { Inter } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import Header from "@/components/ui/header/header";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import i18n from "@/i18n/i18n";
import { I18nextProvider } from "react-i18next";

import { Toaster } from "sonner";
import { DotBackgroundDemo } from "@/components/animation/dot-background";
import { WavyBackground } from "@/components/animation/background-gradient-animation";
import { Client, HydrationProvider } from "react-hydration-provider";

const inter: NextFont = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <link rel={"manifest"} href={"/manifest.webmanifest"} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>Home | Linkvertex</title>
      </head>
      <body className={inter.className}>
        <HydrationProvider>
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <I18nextProvider i18n={i18n}>
              <Client>
                {children}
                <Header />
                <Analytics />
                {/*<AlertMessage />*/}
                <WavyBackground />
                <DotBackgroundDemo />
                <Toaster position="top-right" />
              </Client>
            </I18nextProvider>
          </ClerkProvider>
        </HydrationProvider>
      </body>
    </html>
  );
}
