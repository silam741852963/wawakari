"use client";

import React from "react";
import useDisclaimer from "@/app/hook/useDisclaimer";
import { DisclaimerContextType } from "@/app/context/DisclaimerContext";
import { motion, AnimatePresence } from "framer-motion";

export default function OpenButton() {
  const { disclaimerContext, setDisclaimerContext } =
    useDisclaimer() as DisclaimerContextType;
  return !disclaimerContext ? (
    <motion.button
      className=" text-2xl text-white fixed right-2 top-2 rounded-full border-2 border-white w-10 h-10"
      onClick={() => setDisclaimerContext(true)}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      i
    </motion.button>
  ) : (
    <></>
  );
}
