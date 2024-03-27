"use client";

import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { useUser } from "@clerk/nextjs";

import { useOS } from "@/hooks/useOS";
import Loader from "@/components/loader";
import { useStore } from "@/store/use-modal";

import { useTranslation } from "react-i18next";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";

import { Button } from "@/components/ui/button";
import Animation from "@/components/animation/framer-animaion";

import HeartIcon from "@/assets/images/heart-icon.png";
import SponsorModal from "@/components/modals/sponsor-modal";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<{ outcome: "accepted" | "rejected" }>;
  userChoice: Promise<{ outcome: "accepted" | "rejected" }>;
}

const MainContent: React.FC = () => {
  const { isSignedIn } = useUser();
  const { openModal } = useStore();

  const { t } = useTranslation("home_section");

  const os = useOS();
  const { installPrompt, isAppInstalled, setIsAppInstalled } = useInstallPrompt();

  useEffect(() => {
    setIsAppInstalled(localStorage.getItem("isAppInstalled") === "true");
  }, []);

  const handleClick = async () => {
    const promptEvent = installPrompt as unknown as InstallPromptEvent;
    if (promptEvent) {
      promptEvent.preventDefault(); // This line may not be necessary. It depends on how you've set up the install prompt event handling.
      const choiceResult = await promptEvent.prompt();
      if (choiceResult.outcome === "accepted") {
        setIsAppInstalled(true);
        localStorage.setItem("isAppInstalled", "true");
      } else {
        console.log("User dismissed the install prompt or prompt failed");
      }
    }
  };

  if (isSignedIn) {
    return (
      <div className={"flex h-[100vh] flex-col items-center justify-center gap-[2.5rem]"}>
        <SponsorModal />
        <Animation delay={0}>
          <h1 className={"main-text-animation w-[410px] text-center text-[3.80rem] font-[800] leading-[110%] max-md:w-[508px] max-md:text-[48px] max-sm:w-[450px] max-[530px]:w-full"}>{t("title")}</h1>
        </Animation>
        <Animation delay={1}>
          <p className={"ml-auto mr-auto w-[410px] text-center font-[600] leading-[1.5rem] text-white max-sm:w-[85%]"}>{t("subtitle")}</p>
        </Animation>
        <Animation delay={2} className={"flex items-center gap-2.5"}>
          <Link href={isSignedIn ? "/dashboard" : "/sign-in"} className={"ps rounded-[20px] bg-[#FCD28D] px-[24px] py-[12px] text-[18px] font-[600] transition-all hover:bg-[#EBB064] hover:shadow-none"}>
            {t("button")}
          </Link>
          {isAppInstalled ? (
            <Button onClick={openModal} className={"sp flex !h-[51px] items-center gap-2 rounded-[20px] bg-[#90CDF4] px-[24px] !text-[18px] font-[600] text-black transition-all hover:bg-[#90CDF4]/80"}>
              <Image src={HeartIcon} alt={"HeartIcon"} width={20} height={20} />
              {t("sponsor_btn")}
            </Button>
          ) : (
            <Button onClick={handleClick} className={"sp flex !h-[51px] items-center gap-2 rounded-[20px] bg-[#90CDF4] px-[24px] !text-[18px] font-[600] text-black transition-all hover:bg-[#90CDF4]/80"}>
              {os === "windows" ? (
                <>
                  <i className="fa-brands fa-windows mt-[2px]"></i>
                  {t("download_btn")}
                </>
              ) : os === "macos" ? (
                <>
                  <i className="fa-solid fa-tv mt-[2px]"></i>
                  {t("download_btn")}
                </>
              ) : os === "android" ? (
                <>
                  <i className="fa-brands fa-android mt-[2px]"></i>
                  {t("download_btn")}
                </>
              ) : (
                "Download"
              )}
            </Button>
          )}
        </Animation>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default MainContent;
