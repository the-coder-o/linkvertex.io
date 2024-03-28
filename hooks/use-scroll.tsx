"use client";

import React, { useEffect, useState } from "react";
import { ScrollDetectorProps } from "@/interfaces/context/use-scroll.interface";

const ScrollDetector: React.FC<ScrollDetectorProps> = ({ children, scrollThreshold = 100 }) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHasScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]); // Depend on scrollThreshold so the effect updates if it changes

  return <>{children(hasScrolled)}</>;
};

export default ScrollDetector;
