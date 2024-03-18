"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import Footer from "@/components/ui/footer/footer";
import NotFoundImage from "@/assets/404/404 Error-pana.svg";

export default function Custom404() {
  return (
    <div className={"container"}>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={"mt-[100px] flex items-center justify-center"}>
        <Image src={NotFoundImage} alt="404" width={100} height={100} className={"!w-[100%]"} />
      </motion.div>
      <div className={"flex flex-col items-center justify-center gap-5"}>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className={"text-4xl font-bold text-white"}>
          Page not Found.
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={"flex flex-col items-center gap-2"}>
          <p className={"main-text-animation text-white"}>It's Okay!</p>
          <Link href={"/"} className={"text-md rounded-[20px] bg-[#319795] px-[16px] py-[8px] font-semibold text-white hover:bg-[#319795]/80"}>
            Let's Head Back
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
