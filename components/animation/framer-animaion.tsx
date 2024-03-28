"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedComponentProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

const Animation: React.FC<AnimatedComponentProps> = ({ children, delay = 0, className, ...rest }) => {
  return (
    <motion.div className={className} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: delay * 0.1 }} {...rest}>
      {children}
    </motion.div>
  );
};

export default Animation;
