"use client";

import React from "react";
import { Zap } from "lucide-react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";

const BarChart = dynamic(() => import("../charts/bar-chart"), { ssr: false });
const TopLinks = dynamic(() => import("../charts/top-links"), { ssr: false });
const SocialIcons = dynamic(() => import("../charts/icons-chart"), { ssr: false });
const DeviceChart = dynamic(() => import("../charts/device-chart"), { ssr: false });
const SubscribeChart = dynamic(() => import("../charts/subscribe-chart"), { ssr: false });

const Analytics = () => {
  return (
    <>
      <div>
        <div className={"mb-4 mt-12 flex items-center justify-between"}>
          <h2 className={"text-xl font-bold text-white"}>Activity</h2>
          <Button disabled={true} className={"flex items-center gap-2 rounded-[21px] !bg-[#502374] text-white"}>
            Upgrade
            <Zap className={"h-4 w-4"} />
          </Button>
        </div>
        <div className={"relative"}>
          <div className={"absolute bottom-0 left-0 right-0 top-0 z-50 w-full rounded-[25px] bg-[#000]/50"}>
            <h2 className={"flex h-[100%] items-center justify-center text-4xl font-bold text-white"}>Coming Soon</h2>
          </div>
          <BarChart />
        </div>
      </div>
      <div>
        <div className={"mb-4 mt-12 flex items-center justify-between"}>
          <h2 className={"text-xl font-bold text-white"}>Subscribers</h2>
          <Button disabled={true} className={"flex items-center gap-2 rounded-[21px] !bg-[#502374] text-white"}>
            Upgrade
            <Zap className={"h-4 w-4"} />
          </Button>
        </div>
        <div className={"relative"}>
          <div className={"absolute bottom-0 left-0 right-0 top-0 z-50 w-full rounded-[25px] bg-[#000]/50"}>
            <h2 className={"flex h-[100%] items-center justify-center text-4xl font-bold text-white"}>Coming Soon</h2>
          </div>
          <SubscribeChart />
        </div>
      </div>
      <div>
        <div className={"mb-4 mt-12 flex items-center justify-between"}>
          <h2 className={"text-xl font-bold text-white"}>Top Devices</h2>
          <Button disabled={true} className={"flex items-center gap-2 rounded-[21px] !bg-[#502374] text-white"}>
            Upgrade
            <Zap className={"h-4 w-4"} />
          </Button>
        </div>
        <div className={"relative"}>
          <div className={"absolute bottom-0 left-0 right-0 top-0 z-50 w-full rounded-[25px] bg-[#000]/50"}>
            <h2 className={"flex h-[100%] items-center justify-center text-4xl font-bold text-white"}>Coming Soon</h2>
          </div>
          <DeviceChart />
        </div>
      </div>
      <div>
        <div className={"mb-4 mt-12 flex items-center justify-between"}>
          <h2 className={"text-xl font-bold text-white"}>Top Devices</h2>
          <Button disabled={true} className={"flex items-center gap-2 rounded-[21px] !bg-[#502374] text-white"}>
            Upgrade
            <Zap className={"h-4 w-4"} />
          </Button>
        </div>
        <div className={"relative"}>
          <div className={"absolute bottom-0 left-0 right-0 top-0 z-50 w-full rounded-[25px] bg-[#000]/50"}>
            <h2 className={"flex h-[100%] items-center justify-center text-4xl font-bold text-white"}>Social Icons</h2>
          </div>
          <SocialIcons />
        </div>
      </div>
      <div>
        <div className={"mb-4 mt-12 flex items-center justify-between"}>
          <h2 className={"text-xl font-bold text-white"}>Top Referrers</h2>
          <Button disabled={true} className={"flex items-center gap-2 rounded-[21px] !bg-[#502374] text-white"}>
            Upgrade
            <Zap className={"h-4 w-4"} />
          </Button>
        </div>
        <div className={"relative"}>
          <div className={"absolute bottom-0 left-0 right-0 top-0 z-50 w-full rounded-[25px] bg-[#000]/50"}>
            <h2 className={"flex h-[100%] items-center justify-center text-4xl font-bold text-white"}>Coming Soon</h2>
          </div>
          <TopLinks />
        </div>
      </div>
    </>
  );
};

export default Analytics;
