"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { currentProfile } from "@/lib/current-profile";

import Animation from "@/components/animation/framer-animaion";

import { Button } from "@/components/ui/button";
import LinkVertexIoIcon from "@/assets/images/link-logo.png";

import { LinkItem } from "@/interfaces/dashboard/edit.interface";
import { useDataContext } from "@/app/(root)/dashboard/edit/edit-context";

const Phone = () => {
  const [profile, setProfile] = useState<any | null>(null);

  const { links, title, description } = useDataContext();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData: any | null = await currentProfile();
        setProfile(profileData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const imageUrl: string = profile?.avatar || "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZFM1dzZ4TE1wendoM2E2S212amtab3BUZXkiLCJyaWQiOiJ1c2VyXzJkU0ZjMEI3cWF0aWRSZTJJbk5FeVJvTnQ5VCJ9?width=80";

  return (
    <Animation delay={4} className={"sticky top-[10%]"}>
      <div className={"max-md: h-[730px] overflow-auto rounded-[32px] border-8 border-[#ffffff10] bg-[#000] p-[1rem] max-md:h-[100vh] max-md:rounded-none max-md:border-none"}>
        <div className={"relative flex min-h-full w-[300px] items-center justify-center p-[1rem] max-md:w-auto"}>
          <div className={"grid grid-cols-1 gap-y-4 max-md:w-full max-md:items-center max-md:justify-center"}>
            <div className={"flex items-center justify-center"}>
              <img src={imageUrl} alt="User profile" className={"h-[100px] w-[100px] rounded-full bg-cover"} />
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <h2 className={"text-style flex items-center justify-center text-ellipsis whitespace-break-spaces text-center text-4xl font-bold text-white"}>{title}</h2>
              <p className={"text-style mt-2 flex w-full items-center justify-center text-ellipsis whitespace-break-spaces text-center text-sm text-white max-md:w-[300px]"}>{description}</p>
            </div>
            <div>
              {links?.map((links: LinkItem, index: number) => (
                <div key={index} className={cn("grid items-center justify-center", links.enabled ? "block" : "hidden")}>
                  <Link target={"_blank"} href={links?.url}>
                    <Button className={"my-[3px] h-[3rem] w-full rounded-[10px] bg-[#131313] p-[0.75rem] text-lg font-[600] leading-[1.2] text-white transition-all hover:scale-105 hover:bg-[#131313]"}>{links?.title}</Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className={"flex items-center justify-center"}>
              <p className={"main-text-animation bottom-0 flex items-center justify-center gap-1 text-xl font-bold text-white"}>
                linkvertex.io
                <Image src={LinkVertexIoIcon} alt={"LinkvertexIoIcon"} width={15} height={15} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Phone;
