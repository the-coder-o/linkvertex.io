"use client";

import { motion } from "framer-motion";

import Footer from "@/components/ui/footer/footer";
import CountdownTimer from "@/components/soon/count-down-time";
import React from "react";

const Contact = () => {
  const launchDate = new Date("2024-07-11T00:00:00");

  return (
    <>
      <head>
        <title>Contact | Linkvertex</title>
      </head>
      <div className={"container"}>
        <div className={"flex h-[100vh] flex-col items-center justify-center gap-[15px]"}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={"w-[500px] text-center text-6xl font-bold leading-tight text-white max-sm:w-full max-sm:text-5xl max-sm:leading-normal"}>
            This <span className={"text-yellow-400"}>Contact</span> page Coming Soon
          </motion.h1>
          <CountdownTimer targetDate={launchDate} />
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={"w-[70%] text-center text-white max-sm:w-full"}>
            We are excited to announce that we will be launching soon and can't wait to share our new platform with you.
          </motion.p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
