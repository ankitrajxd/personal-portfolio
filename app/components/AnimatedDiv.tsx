"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  ClassName?: string;
}

const AnimatedDiv = ({ children, ClassName }: Props) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.4,}}
      className={ClassName}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
