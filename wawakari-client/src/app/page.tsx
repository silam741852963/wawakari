"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MainVars = {
  initital: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const MainItemVars = {
  initial: {
    x: -10,
    y: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    x: -10,
    y: 10,
    opacity: 0,
  },
};

const ArrowVars = {
  initial: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  animate: {
    x: 10,
    y: 0,
    opacity: 1,
  },
  exit: {
    x: -10,
    y: 10,
    opacity: 0,
  },
  hover: {
    x: 50,
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  const router = useRouter();
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <motion.main
        variants={MainVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className=""
      >
        <motion.h1
          variants={MainItemVars}
          className=" font-mono text-8xl mb-14"
        >
          Enter your Japanese sentence
        </motion.h1>
        <motion.form
          variants={MainVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col justify-center"
          action={(formData: FormData) => {
            router.push(`/${formData.get("text")}`);
          }}
        >
          <motion.input
            variants={MainItemVars}
            type="text"
            name="text"
            className="text-black rounded-full p-5 text-5xl"
          />
          <motion.button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variants={MainItemVars}
            className="text-5xl p-5 pt-14 font-mono flex justify-center gap-5"
          >
            Sumbit{" "}
            <motion.span
              variants={ArrowVars}
              animate={isHovered ? "hover" : ""}
              initial="initial"
            >
              →
            </motion.span>
          </motion.button>
        </motion.form>
      </motion.main>
    </>
  );
}
