"use client";

import ScrollDetector from "@/hooks/use-scroll";
import { cn } from "@/utils/cn";
import Link from "next/link";

import Logo from "@/assets/images/link-logo.png";
import Image from "next/image";
import CountdownTimer from "@/components/soon/count-down-time";

const Profile = () => {
  const launchDate = new Date("2024-04-11T00:01:00");

  return (
    <div className={"container"}>
      <ScrollDetector scrollThreshold={200}>
        {(hasScrolled: boolean) => (
          <div className={cn("fixed left-0 right-0 top-0 z-[99999] ml-auto mr-auto mt-[15px] w-full max-w-[788px] items-center rounded-[72px] border-[1px] border-white p-[12px] opacity-0 transition-opacity", hasScrolled ? "bg-[#ffffff80] opacity-100 backdrop-blur-sm backdrop-filter transition-opacity delay-150" : "opacity-0")}>
            <div className={"flex w-full items-center justify-between"}>
              <img src={"https://ugc.production.linktr.ee/f6dcfabf-b51b-47dc-8166-e9f1c5e477da_person3.jpeg?io=true&size=avatar-v3_0"} alt={""} className={"h-[44px] w-[44px] rounded-full"} />
              <h1 className={"main-text-animation text-[16px] text-[20px] font-[700]"}>@the_coder_o</h1>
              <div></div>
            </div>
          </div>
        )}
      </ScrollDetector>
      <div className={"flex h-[100vh] flex-col justify-between pb-5 pt-[65px]"}>
        <div className={"flex flex-col items-center gap-1"}>
          <img src={"https://ugc.production.linktr.ee/f6dcfabf-b51b-47dc-8166-e9f1c5e477da_person3.jpeg?io=true&size=avatar-v3_0"} alt={""} className={"h-[96px] w-[96px] rounded-full"} />
          <div className={"flex flex-col items-center"}>
            <h1 className={"main-text-animation text-[20px] font-bold"}>@the_coder_o</h1>
            <h2 className={"w-[600px] text-center text-[18px] font-[500] text-white max-md:w-full"}>Hi, I'm Abdul Basit, a fullSatck developer who loves building cool things with code. In addition to coding, I also make more interesting fullSatck applications,</h2>
          </div>
        </div>
        <div className={"flex flex-col items-center justify-center gap-[10px]"}>
          <h2 className={"main-text-animation w-[500px] text-center text-6xl font-bold leading-tight text-white max-sm:w-full max-sm:text-5xl max-sm:leading-normal"}>Coming Soon</h2>
          <CountdownTimer targetDate={launchDate} />
          <p className={"w-[70%] text-center text-white max-sm:w-full"}>We are excited to announce that we will be launching soon and can't wait to share our new platform with you.</p>
        </div>
        <div className={"flex items-center justify-center"}>
          <Link href={"/"} className={"flex items-center justify-center gap-2 rounded-[25px] !bg-[#90CDF4] !py-3 px-5 text-[15px] font-[900] text-black hover:!bg-[#90CDF4]/90"}>
            <Image src={Logo} alt={"Logo"} width={20} height={20} className={"!h-[18px] !w-[18px]"} />
            Create your linkvertex
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
