"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { setCookie, getCookie } from "cookies-next";
import useDisclaimer from "./hook/useDisclaimer";
import { DisclaimerContextType } from "./context/DisclaimerContext";
import Disclaimer from "./component/Disclaimer/Disclaimer";

import dynamic from "next/dynamic";
import OpenButton from "./component/Disclaimer/OpenButton";

const NoSSRSH = dynamic(() => import("./component/SearchHistory"), {
  ssr: false,
});

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

function Submit() {
  const { pending } = useFormStatus();
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={MainItemVars}
      className="text-5xl p-5 pt-14 font-mono flex justify-center gap-5"
    >
      {pending ? (
        "Submitting..."
      ) : (
        <>
          Submit
          <motion.span
            variants={ArrowVars}
            animate={isHovered ? "hover" : ""}
            initial="initial"
          >
            →
          </motion.span>
        </>
      )}
    </motion.button>
  );
}

function Input() {
  const { pending } = useFormStatus();

  return (
    <motion.input
      variants={MainItemVars}
      type="text"
      name="text"
      className="text-black rounded-full p-5 text-5xl w-screen disabled:cursor-not-allowed"
      disabled={pending ? true : false}
    />
  );
}

export default function Home() {
  const { disclaimerContext, setDisclaimerContext } =
    useDisclaimer() as DisclaimerContextType;

  const router = useRouter();

  return (
    <>
      <motion.main
        variants={MainVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden"
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
            let search = (
              getCookie("search")
                ? JSON.parse(getCookie("search") as string)
                : []
            ) as [];
            search.unshift(formData.get("text") as never);
            setCookie(
              "search",
              JSON.stringify(
                search.filter((value, index) => search.indexOf(value) === index)
              )
            );
            router.push(`/${formData.get("text")}`);
          }}
        >
          <Input />
          <Submit />
          <NoSSRSH />
        </motion.form>
        <OpenButton />
        <Disclaimer />
      </motion.main>
    </>
  );
}
