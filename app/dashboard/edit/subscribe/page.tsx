"use client";

import React from "react";

import { useTranslation } from "react-i18next";
import { HelpCircle, ShieldAlert } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Page = () => {
  const { t } = useTranslation("subscribers_page");

  return (
    <>
      <head>
        <title>Subscribe | Linkvertex</title>
      </head>
      <div>
        <Alert className="mb-8 w-full rounded-[24px] border-transparent !bg-[#1E2B32]">
          <ShieldAlert className="flex items-center justify-center rounded-full bg-[#90CDF4] p-[4px]" />
          <AlertTitle className="ml-2 text-white">{t("alert_message_title")}</AlertTitle>
          <AlertDescription className="ml-2 text-[16px] font-medium text-white">{t("alert_message_text")}</AlertDescription>
        </Alert>
        <div>
          <div className={"rounded-[20px] border-2 border-white bg-transparent p-5"}>
            <div className={"mb-5 flex items-center justify-between"}>
              <p className={"flex items-center gap-2 text-xl text-white"}>
                Let visitors subscribe
                <HelpCircle size={20} />
              </p>
              <Switch disabled={true} id="airplane-mode" />
            </div>
            <p className={"text-white"}>
              Add a button so visitors can subscribe to your <span className={"main-text-animation"}>linkvertex.io</span>.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className={"!border-b-[#fff]/50"} value="item-1">
              <AccordionTrigger className={"text-white"}>Why should I build email subscribers?</AccordionTrigger>
              <AccordionContent className={"text-white"}>Email is the only reliable medium to build a following, unsusceptible to algorithms and platform shifts. Until now, it has been hard and expensive to build an email list. We’ve reinvented it for creators.</AccordionContent>
            </AccordionItem>
            <AccordionItem className={"!border-b-[#fff]/50"} value="item-2">
              <AccordionTrigger className={"text-white"}>Do I have to offer something in return?</AccordionTrigger>
              <AccordionContent className={"text-white"}>It’s better if you do, but most creators start off by asking their visitors to subscribe for future updates.</AccordionContent>
            </AccordionItem>
            <AccordionItem className={"!border-b-[#fff]/50"} value="item-3">
              <AccordionTrigger className={"text-white"}>What does it cost?</AccordionTrigger>
              <AccordionContent className={"text-white"}>It’s free to get started, and you can accept unlimited subscribers. You only pay ($10/month) when you start sending emails.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Page;
