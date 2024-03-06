"use client";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  rootToken?: Token;
  rootIndex: number[];
  groupedTokens: Token[][];
  depth: number;
};

const SectionVars = {
  initial: {
    x: -100,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    x: 50,
    y: 0,
    opacity: 0,
  },
};

export default function DrawTokens(props: Props) {
  let curRoot: number[] = [];
  if (props.rootToken) {
    curRoot.push(props.rootToken.index);
  }
  return (
    <>
      <div className="w-screen"></div>
      {props.rootToken ? (
        <motion.section
          className={`depth-${props.depth} flex-grow flex justify-center items-center levelSection`}
          variants={SectionVars}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ ease: "linear", delay: props.depth * 0.5 }}
        >
          <div
            key={props.rootToken.index}
            className="w-60 text-center border-sky-100 border-2 p-2"
          >
            <p>
              <strong>Orth:</strong> {props.rootToken.orth}
            </p>
            <p>
              <strong>Morph Reading:</strong>{" "}
              {props.rootToken.morph.Reading?.join(", ") || "N/A"}
            </p>
            <p>
              <strong>POS:</strong> {props.rootToken.pos}
            </p>
          </div>
        </motion.section>
      ) : props.groupedTokens[props.rootIndex[0]] ? (
        <motion.section
          className={`depth-${props.depth} flex gap-5 flex-grow justify-center levelSection items-center p-2`}
          variants={SectionVars}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ ease: "linear", delay: props.depth * 0.5 }}
        >
          {props.rootIndex.map((root) => (
            <>
              {props.groupedTokens[root] ? (
                <>
                  {props.groupedTokens[root].map((token) => (
                    <div
                      key={token.index}
                      className=" w-60 text-center border-sky-100 border-2 p-2"
                    >
                      <p>
                        <strong>Orth:</strong> {token.orth}
                      </p>
                      <p>
                        <strong>Morph Reading:</strong>{" "}
                        {token.morph.Reading?.join(", ") || "N/A"}
                      </p>
                      <p>
                        <strong>POS:</strong> {token.pos}
                      </p>
                    </div>
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
