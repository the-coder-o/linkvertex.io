"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useStore } from "@/store/use-modal";

import { AnimatedTooltip } from "@/components/animation/animated-tooltip";
import { cn } from "@/utils/cn";

const SponsorModal = () => {
  const { isModalOpen, closeModal } = useStore();
  const [modalClassName, setModalClassName] = useState("modal-enter");

  useEffect(() => {
    if (isModalOpen) {
      setModalClassName("modal-enter");
      setTimeout(() => setModalClassName("modal-enter-active"), 10); // Trigger the animation
    } else {
      setModalClassName("modal-exit");
      setTimeout(() => setModalClassName("modal-exit-active"), 10); // Trigger the animation
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  if (!isModalOpen) return null;

  return (
    <>
      <div onClick={closeModal} className={"fixed bottom-0 left-0 right-0 top-0 z-[9999999] bg-black/80 backdrop-blur-lg transition-all delay-150"}></div>
      <div className={cn(modalClassName, 'delay-150" container fixed bottom-0 left-0 right-0 top-[150px] z-[999999999] h-[500px] rounded-[24px] bg-zinc-900 p-6 transition-all max-sm:!top-0 max-sm:h-full max-sm:rounded-none max-sm:py-0')}>
        <div className={"flex h-full flex-col items-center justify-between"}>
          <div>
            <div className={"relative mt-5 flex items-center justify-between"}>
              <h2 className={"text-2xl font-bold text-white max-sm:text-xl"}>
                Become a sponsor of <span className={"main-text-animation !font-[900]"}>linkvertex.io</span>
              </h2>
              <i onClick={closeModal} className="fa-solid fa-xmark cursor-pointer text-[20px] text-white"></i>
            </div>
            <p className={"mt-3 text-lg font-[500] text-white"}>This sponsorship will go towards maintaining and improving some of my favorite and or popular open-source applications.</p>
            <div className={"mt-8 grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center"}>
              <Link href={""} className={"flex items-center justify-center gap-2 rounded-[21px] bg-purple-600 py-3 text-[16px] font-bold text-white transition-all hover:scale-105"}>
                Sponsoring from github
                <i className="fa-brands fa-github text-white"></i>
              </Link>
              <Link href={""} className={"flex items-center justify-center gap-2 rounded-[21px] bg-rose-500 py-3 text-[16px] font-bold text-white transition-all hover:scale-105"}>
                Sponsoring for Project
                <i className="fa-solid fa-diagram-project text-white"></i>
              </Link>
              <Link href={""} className={"flex items-center justify-center gap-2 rounded-[21px] bg-blue-500 py-3 text-[16px] font-bold text-white transition-all hover:scale-105"}>
                Buy me a coffee
                <i className="fa-solid fa-mug-hot text-white"></i>
              </Link>
              <Link href={""} className={"flex items-center justify-center gap-2 rounded-[21px] bg-green-500 py-3 text-[16px] font-bold text-white transition-all hover:scale-105"}>
                Sponsoring for database
                <i className="fa-solid fa-server text-white"></i>
              </Link>
              <Link href={""} className={"flex items-center justify-center gap-2 rounded-[21px] bg-orange-400 py-3 text-[16px] font-bold text-white transition-all hover:scale-105"}>
                Sponsoring for domain
                <i className="fa-solid fa-globe text-white"></i>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-row items-center gap-2 pb-6">
            <p className={"main-text-animation text-2xl font-[900] text-white"}>Our Sponsors:</p>
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorModal;

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
