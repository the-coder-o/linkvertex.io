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
