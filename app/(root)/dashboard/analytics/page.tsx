"use client";

import React from "react";

import { Check, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

import BarChart from "@/app/(root)/dashboard/analytics/charts/bar-chart";
import DeviceChart from "@/app/(root)/dashboard/analytics/charts/device-chart";
import SubscribeChart from "@/app/(root)/dashboard/analytics/charts/subscribe-chart";

const Analytic = () => {
  return (
    <>
      <head>
        <title>Analytic | Linkvertex</title>
      </head>
      <div className={"container"}>
        <div className={"mb-[50px] mt-[150px]"}>
          <h1 className={"mb-5 text-center text-2xl font-bold text-white"}>Lifetime Analytics</h1>
          <div className={"flex items-center justify-between"}>
            <div className={"flex items-center gap-2"}>
              <span className={"h-3 w-3 rounded-full !bg-green-600"}></span>
              <p className={"text-white"}>
                Views: <span className={"text-xl"}>25</span>
              </p>
            </div>
            <div className={"flex items-center gap-2"}>
              <span className={"h-3 w-3 rounded-full !bg-purple-600"}></span>
              <p className={"text-white"}>
                Clicks: <span className={"text-xl"}>25</span>
              </p>
            </div>
            <div className={"flex items-center gap-2"}>
              <span className={"h-3 w-3 rounded-full !bg-blue-600"}></span>
              <p className={"text-white"}>
                CTR: <span className={"text-xl"}>25%</span>
              </p>
            </div>
            <div className={"flex items-center gap-2"}>
              <span className={"h-3 w-3 rounded-full !bg-yellow-600"}></span>
              <p className={"text-white"}>
                Revenue: <span className={"text-xl"}>47</span>
              </p>
            </div>
            <div className={"flex items-center gap-2"}>
              <span className={"h-3 w-3 rounded-full !bg-pink-600"}></span>
              <p className={"text-white"}>
                Subscribers: <span className={"text-xl"}>0</span>
              </p>
            </div>
          </div>
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
                <Button className={"flex items-center gap-2 rounded-[21px] !bg-[#fff] text-[18px] font-bold text-[#502374]"}>
                  <Zap className={"h-4 w-4"} />
                  Upgrade for free 100%
                </Button>
              </div>
              <img src="https://assets.production.linktr.ee/fbade227f2113c13a53d0e8f447bfc1b4af57b9f/images/analytics-upgrade-banner.png" className={"!w-[300px]"} alt="" />
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Analytic;
