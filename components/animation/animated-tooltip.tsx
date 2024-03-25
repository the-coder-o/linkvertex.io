"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div className="group  relative -mr-4" key={item.name} onMouseEnter={() => setHoveredIndex(item.id)} onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence mode="wait"></AnimatePresence>
          <Image onMouseMove={handleMouseMove} height={100} width={100} src={item.image} alt={item.name} className="relative !m-0 h-8 w-8 rounded-full border-2 border-white object-cover object-top !p-0 transition  duration-500 group-hover:z-30 group-hover:scale-105" />
        </div>
      ))}
    </>
  );
};
