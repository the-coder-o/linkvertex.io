import React from "react";

import { Check, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const UnClockMessage = () => {
  return (
    <div className={"mt-5 rounded-[25px] bg-[#502374] p-10"}>
      <h2 className={"text-xl font-bold text-white"}>Unlock powerful insights</h2>
      <p className={"text-white"}>Find out how your Linktree is performing with a Pro 30-day free trial. Cancel anytime.</p>
      <div className={"flex items-center justify-end"}>
        <div className={"flex flex-col gap-5"}>
          <p className={"flex items-center gap-2 text-xl text-white"}>
            <Check className={"text-white"} />
            See your top performing links
          </p>
          <p className={"flex items-center gap-2 text-xl text-white"}>
            <Check className={"text-white"} />
            Track your revenue and sales
          </p>
          <p className={"flex items-center gap-2 text-xl text-white"}>
            <Check size={34} className={"text-white"} />
            Get the full picture with a year's worth of data
          </p>
          <Button disabled={true} className={"flex items-center gap-2 rounded-[21px] !bg-[#fff] text-[18px] font-bold text-[#502374]"}>
            <Zap className={"h-4 w-4"} />
            Upgrade for free 100%
          </Button>
        </div>
        <img src="https://assets.production.linktr.ee/fbade227f2113c13a53d0e8f447bfc1b4af57b9f/images/analytics-upgrade-banner.png" className={"!w-[300px]"} alt="" />
      </div>
    </div>
  );
};

export default UnClockMessage;
