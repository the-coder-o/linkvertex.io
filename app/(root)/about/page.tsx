"use client";

import React from "react";
import StorySection from "@/app/(root)/about/components/StorySection";
import FeatureSections from "@/app/(root)/about/components/FeatureSections";
import Footer from "@/components/ui/footer/footer";

const About = () => {
  return (
    <>
      <head>
        <title>About | Linkvertex</title>
      </head>
      <div className={"container"}>
        <StorySection />
        <FeatureSections />
        <div className={"mb-[50px] rounded-[25px] bg-[#E8C1E9]"}>
          <h2 className={"flex items-center justify-center py-[10px] text-[100px] font-bold text-[#502374] max-md:text-[80px] max-[550px]:text-[70px] max-[490px]:text-[60px] max-[410px]:text-[50px]"}>linkvertex.io</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
