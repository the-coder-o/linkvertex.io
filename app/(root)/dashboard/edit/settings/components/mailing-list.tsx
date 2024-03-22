"use client";

import React from "react";

import { Lock, Mailbox } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const MailingList = () => {
  return (
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
  );
};

export default MailingList;
