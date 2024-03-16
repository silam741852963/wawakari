"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getCookie } from "cookies-next";

const UlVars = {
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

const LiVars = {
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

export default function SearchHistory() {
  const search = (
    getCookie("search") ? JSON.parse(getCookie("search") as string) : []
  ) as [];
  return (
    <motion.ul
      className="flex gap-10 mt-10 ml-10"
      variants={UlVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {search.map((searchHis) => {
        return (
          <motion.li variants={LiVars} key={searchHis}>
            <Link
              href={`/${searchHis}`}
              className=" bg-slate-600 rounded-lg p-2"
            >
              {searchHis}
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
