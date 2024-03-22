"use client";

import React from "react";
import { Check } from "lucide-react";

const Analytic = () => {
  return (
    <>
      <head>
        <title>Analytic | Linkvertex</title>
      </head>
      <div className={"container"}>
        <div className={"mt-[150px]"}>
          <h1 className={"mb-5 text-center text-2xl font-bold text-white"}>Lifetime Analytics</h1>
          <div className={"flex flex-wrap items-center justify-center gap-6 max-md:flex-wrap max-md:gap-y-[20px]"}>
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
          <div className={"mt-5 rounded-[25px] bg-[#90CDF4] p-10"}>
            <h2 className={"text-xl font-bold text-black"}>Unlock powerful insights</h2>
            <p className={"text-black"}>Find out how your Linktree is performing with a Pro 30-day free trial. Cancel anytime.</p>
            <div className={"flex items-center justify-end"}>
              <div className={"flex flex-col gap-5"}>
                <p className={"flex items-center gap-2 text-xl text-black"}>
                  <Check className={"text-black"} />
                  See your top performing links
                </p>
                <p className={"flex items-center gap-2 text-xl text-black"}>
                  <Check className={"text-black"} />
                  Track your revenue and sales
                </p>
                <p className={"flex items-center gap-2 text-xl text-black"}>
                  <Check size={34} className={"text-black"} />
                  Get the full picture with a year's worth of data
                </p>
              </div>
              <img src="https://assets.production.linktr.ee/fbade227f2113c13a53d0e8f447bfc1b4af57b9f/images/analytics-upgrade-banner.png" className={"!w-[300px]"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytic;
