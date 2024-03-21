"use client";

import React from "react";

import { Archive, CircleMinus, HandHeart, Lock, Mailbox, ScanSearch, ShieldAlert } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Page = () => {
  return (
    <>
      <head>
        <title>Settings | linkvretex.io</title>
      </head>
      <div className={"flex flex-col gap-10"}>
        <Alert className="w-full rounded-[24px] border-transparent !bg-[#1E2B32]">
          <ShieldAlert className="flex items-center justify-center rounded-full bg-[#90CDF4] p-[4px]" />
          <AlertTitle className="ml-2 text-white">Coming Soon, will be open in v:2.0.0</AlertTitle>
          <AlertDescription className="ml-2 text-[16px] font-medium text-white">Streamlined link management with engagement and privacy tools.</AlertDescription>
        </Alert>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
            <ScanSearch className={"h-5 w-5 !text-white"} />
            Seo optimizing
          </h2>
          <div>
            <div className={"flex flex-col gap-5"}>
              <div>
                <Input disabled={true} type="text" placeholder={"Example: @the_coder_o"} className={"mt-[0.5rem] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] pt-[5px] text-[1rem] text-white placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} id="hs-inline-add-on" name="hs-inline-add-on" />
              </div>
              <div>
                <Textarea disabled={true} placeholder={"Example: Linktree. Make your link do more. Changes to metadata may take some time to appear on other platforms."} className={" mt-[0.5rem] h-[150px] cursor-not-allowed rounded-[20px] border-2 !bg-transparent px-[16px] !pt-[16px] text-[1rem] text-white !outline-none placeholder:font-medium placeholder:text-[#BDC3DD] focus:!border-2 focus:!border-[#63b3ed] focus:!transition"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
            <Mailbox className={"!text-white"} />
            Mailing list integrations
          </h2>
          <div className={"flex flex-col gap-2.5"}>
            <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
              <div className={"mb-5 flex items-center justify-between"}>
                <p className={"flex items-center gap-2 text-xl text-white"}>
                  Email sign-up
                  <Lock size={20} />
                </p>
                <Switch disabled={true} id="airplane-mode" />
              </div>
              <p className={"text-white"}>Add an email sign-up to your linkvertex for mailing list subscriptions.</p>
            </div>
            <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
              <div className={"mb-5 flex items-center justify-between"}>
                <p className={"flex items-center gap-2 text-xl text-white"}>
                  SMS sign-up
                  <Lock size={20} />
                </p>
                <Switch disabled={true} id="airplane-mode" />
              </div>
              <p className={"text-white"}>Collect SMS subscribers with a sign-up field on your linkvertex.</p>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
            <HandHeart className={"!text-white"} />
            Support banner
          </h2>
          <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
            <div className={"mb-5 flex items-center justify-between"}>
              <p className={"flex items-center gap-2 text-xl text-white"}>
                Show your support
                <Lock size={20} />
              </p>
              <Switch disabled={true} id="airplane-mode" />
            </div>
            <p className={"text-white"}>Show your support for important causes with a profile banner. Only one banner can be active at a time.</p>
          </div>
        </div>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
            <CircleMinus className={"!text-white"} />
            Sensitive material
          </h2>
          <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
            <div className={"mb-5 flex justify-between"}>
              <p className={"text-white"}>Display a sensitive content warning before visitors can view your profile.</p>
              <Switch disabled={true} id="airplane-mode" />
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-2"}>
          <h2 className={"flex items-center gap-1 text-[20px] font-[900] text-white"}>
            <Archive className={"!text-white"} />
            Archive
          </h2>
          <div className={"rounded-[20px] border-[2px] border-white bg-transparent p-5"}>
            <div className={"flex flex-col justify-between gap-3"}>
              <p className={"text-white"}>Move all your inactive links to the archive and keep their analytics data.</p>
              <Button disabled={true} className={"rounded-[21px] !bg-[#90CDF4] text-[16px] font-bold text-black hover:!bg-[#90CDF4]/90"}>
                Archive all inactive links
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
