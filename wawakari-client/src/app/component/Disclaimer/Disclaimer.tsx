"use client";

import React from "react";
import useDisclaimer from "@/app/hook/useDisclaimer";
import { DisclaimerContextType } from "@/app/context/DisclaimerContext";
import { motion, AnimatePresence } from "framer-motion";
import CloseButton from "./CloseButton";

const DisclaimerVars = {
  initial: {
    x: 500,
    y: 0,
    opacity: 1,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    x: 500,
    y: 0,
    opacity: 1,
  },
};

export default function Disclaimer() {
  const { disclaimerContext, setDisclaimerContext } =
    useDisclaimer() as DisclaimerContextType;
  return (
    <>
      <AnimatePresence>
        {disclaimerContext && (
          <motion.aside
            className="fixed right-0 top-0 p-5 bg-white text-black h-screen w-96"
            variants={DisclaimerVars}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "linear" }}
          >
            <CloseButton />
            <article className=" mt-5">
              <h2 className=" text-center text-2xl">Disclaimer</h2>
              <p className=" mt-5 text-justify">
                The web service, <strong>Wawakari</strong>, utilizes the{" "}
                <strong>GiNZA</strong> NLP library for dependency parsing and to
                evaluate the politeness of Japanese sentences. This project is
                part of our coursework in Tokenization and Text Classification
                within an NLP course at Ho Chi Minh City University of
                Technology (HCMUT), developed by myself, Sỹ Lâm, and my
                colleague. Currently in its early stages, Wawakari&apos;s
                capability to assess politeness levels is under continuous
                development and improvement.
              </p>
              <p className=" mt-5 text-justify">
                Please note that updates to <strong>Wawakari</strong> may occur
                based on our discretion and as our schedule allows. For any
                inquiries or feedback, feel free to contact us at
                <a
                  href="mailto:lam.nguyen1010@hcmut.edu.vn"
                  className=" block text-nowrap underline"
                >
                  lam.nguyen1010@hcmut.edu.vn
                </a>
              </p>
            </article>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
