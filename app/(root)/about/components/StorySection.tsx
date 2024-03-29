import React from "react";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Animation from "@/components/animation/framer-animaion";

const StorySection = () => {
  const { t } = useTranslation("about_page");

  return (
    <div className={"mb-[50px] mt-[150px]"}>
      <div className={"flex flex-col justify-center  gap-2"}>
        <Animation delay={0}>
          <h1 className={"main-text-animation text-center text-4xl font-bold text-white max-sm:text-[25px]"}>{t("title")}</h1>
          <Image src={"https://assets-global.website-files.com/5db7f73b24ac075340659d60/640737e3aa8120104836aa4f_linktree-cap_link-mockup.png"} alt={"bg-image"} width={2000} height={2000} className={"my-12 !w-full rounded-lg !bg-cover"} />
        </Animation>
        <Animation delay={1}>
          <p className={"text-center text-xl text-white max-sm:text-[16px] max-sm:leading-normal"}>
            <span className={"font-bold"}>Linkvertex.io:</span> {t("description")}
          </p>
        </Animation>
        <Animation delay={2}>
          <div></div>
        </Animation>
      </div>
    </div>
  );
};

export default StorySection;
