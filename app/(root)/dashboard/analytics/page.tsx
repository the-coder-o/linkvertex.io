"use client";

import React from "react";

import Animation from "@/components/animation/framer-animaion";
import Analytics from "@/app/(root)/dashboard/analytics/components/analytics";
import UnClockMessage from "@/app/(root)/dashboard/analytics/components/unclock-message";
import LifetimeAnalytics from "@/app/(root)/dashboard/analytics/components/lifetime-analytics";

const Analytic = () => {
  return (
    <>
      <head>
        <title>Analytic | Linkvertex</title>
      </head>
      <div className={"container"}>
        <div className={"mb-[50px] mt-[150px]"}>
          <Animation delay={1}>
            <h1 className={"mb-5 text-center text-2xl font-bold text-white"}>Lifetime Analytics</h1>
          </Animation>
          <Animation delay={2}>
            <LifetimeAnalytics />
          </Animation>
          <video autoPlay={true} loop={true} className={"mt-5 w-full rounded-[20px]"} src="https://mfe-billing.production.linktr.ee/images/analytics-free-trial-modal-banner.8569631e7d79cf7ff080.mp4"></video>
          <Animation delay={3}>
            <UnClockMessage />
          </Animation>
          <Animation delay={4}>
            <Analytics />
          </Animation>
        </div>
      </div>
    </>
  );
};

export default Analytic;
