"use client";
import { motion, AnimatePresence, delay } from "framer-motion";
import { ArcherContainer, ArcherElement } from "react-archer";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

type Props = {
  rootToken?: Token;
  rootIndex: number[];
  groupedTokens: Token[][];
  depth: number;
};

const SectionVars = {
  initial: {},
  animate: {},
  exit: {},
};

export default function DrawTokens(props: Props) {
  const [showTooltip, setShowTooltip] = useState(true);
  let curRoot: number[] = [];
  if (props.rootToken) {
    curRoot.push(props.rootToken.index);
  }
  return (
    <>
      {props.rootToken ? (
        <section
          className={`depth-${props.depth} flex-grow flex justify-center items-center levelSection`}
        >
          <motion.div
            id="root"
            key={props.rootToken.index}
            className="w-52 text-center border-sky-100 border-2 p-2"
            data-tooltip-id="tooltip-root"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => {
              setTimeout(() => setShowTooltip(true), 100);
            }}
            onHoverEnd={() => setShowTooltip(false)}
          >
            <Tooltip
              id="tooltip-root"
              place="right"
              className={showTooltip ? "" : "hidden"}
            >
              <div>
                <p>Index: {props.rootToken.index}</p>
                <p>Lemma: {props.rootToken.lemma}</p>
                <p>Normalized form: {props.rootToken.norm}</p>
                <p>Part of speech: {props.rootToken.pos}</p>
                <p>Tag: {props.rootToken.tag}</p>
              </div>
            </Tooltip>
            <ArcherElement
              id="root"
              relations={
                props.groupedTokens[props.rootToken.index]
                  ? props.groupedTokens[props.rootToken.index].map((token) => {
                      return {
                        targetId: `${token.index}`,
                        targetAnchor: "top",
                        sourceAnchor: "bottom",
                        style: {},
                        label: (
                          <div className=" bg-slate-700 rounded-lg p-1 text-nowrap text-sm">
                            {token.dep}
                          </div>
                        ),
                      };
                    })
                  : undefined
              }
            >
              <div>
                <p>
                  <strong>{props.rootToken.orth}</strong>
                </p>
                <p>{props.rootToken.morph.Reading?.join(", ") || "N/A"}</p>
              </div>
            </ArcherElement>
          </motion.div>
        </section>
      ) : props.groupedTokens[props.rootIndex[0]] ? (
        <motion.section
          className={`depth-${props.depth} flex gap-5 flex-grow justify-center levelSection items-center p-2`}
        >
          {props.rootIndex.map((root) => (
            <>
              {props.groupedTokens[root] ? (
                <>
                  {props.groupedTokens[root].map((token) => (
                    <motion.div
                      key={token.index}
                      className=" w-40 text-center border-sky-100 border-2 p-2"
                      data-tooltip-id={`tooltip-${token.index}`}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      onHoverStart={() => {
                        setTimeout(() => setShowTooltip(true), 100);
                      }}
                      onHoverEnd={() => {
                        setShowTooltip(false);
                      }}
                    >
                      <Tooltip
                        id={`tooltip-${token.index}`}
                        place="right"
                        className={showTooltip ? "" : "hidden"}
                      >
                        <div>
                          <p>Index: {token.index}</p>
                          <p>Lemma: {token.lemma}</p>
                          <p>Normalized form: {token.norm}</p>
                          <p>Part of speech: {token.pos}</p>
                          <p>Tag: {token.tag}</p>
                        </div>
                      </Tooltip>
                      <ArcherElement
                        id={String(token.index)}
                        relations={
                          props.groupedTokens[token.index]
                            ? props.groupedTokens[token.index].map((c) => {
                                return {
                                  targetId: `${c.index}`,
                                  targetAnchor: "top",
                                  sourceAnchor: "bottom",
                                  style: {},
                                  label: (
                                    <div className=" bg-slate-700 rounded-lg p-1 text-nowrap text-sm">
                                      {c.dep}
                                    </div>
                                  ),
                                };
                              })
                            : undefined
                        }
                      >
                        <div>
                          <p>
                            <strong>{token.orth}</strong>
                          </p>
                          <p>{token.morph.Reading?.join(", ") || "N/A"}</p>
                        </div>
                      </ArcherElement>
                    </motion.div>
                  ))}
                  {props.groupedTokens[root].forEach((token) =>
                    curRoot.push(token.index)
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </motion.section>
      ) : (
        <></>
      )}
      {curRoot.length > 0 && (
        <DrawTokens
          rootIndex={curRoot}
          groupedTokens={props.groupedTokens}
          depth={props.depth + 1}
        />
      )}
    </>
  );
}
