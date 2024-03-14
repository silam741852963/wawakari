"use client";

import { motion } from "framer-motion";
import DrawTokens from "./DrawTokens";
import { ArcherContainer, ArcherElement } from "react-archer";
import toast, { Toaster } from "react-hot-toast";
import { info } from "console";

const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = { padding: "10px", border: "1px solid black" };

type Props = {
  rootToken: Token;
  groupedTokens: Token[][];
  politeness: number;
};

const politenessLevelToToastInfor = (politeness: number) => {
  console.log(politeness);
  const info = [
    {
      English: "rude",
      Japanese: "無礼 (ぶれい)",
      color: "#ff0000",
      icon: "👿",
      description:
        "Represents outright rudeness, displaying hostility or aggression.",
      textColor: "#ffffff", // White for better contrast on dark background
    },
    {
      English: "disrespectful",
      Japanese: "尊敬しない (そんけいしない)",
      color: "#ff4000",
      icon: "😡",
      description:
        "Indicates a clear lack of respect or consideration for others.",
      textColor: "#ffffff",
    },
    {
      English: "blunt",
      Japanese: "ぶっきらぼう",
      color: "#ff8000",
      icon: "😠",
      description:
        "Communication is straightforward to the point of seeming rude; lacks tact.",
      textColor: "#ffffff",
    },
    {
      English: "informal",
      Japanese: "くだけた",
      color: "#ffbf00",
      icon: "😐",
      description:
        "Casual and relaxed, possibly too much for certain settings.",
      textColor: "#000000", // Black for darker yellow tones
    },
    {
      English: "casual",
      Japanese: "カジュアル",
      color: "#ffff00",
      icon: "😀",
      description: "Friendly and informal, appropriate for peers and friends.",
      textColor: "#000000",
    },
    {
      English: "neutral",
      Japanese: "中立 (ちゅうりつ)",
      color: "#bfbfbf",
      icon: "😶",
      description:
        "Neither formal nor informal, a balanced way of communication.",
      textColor: "#000000", // Black for grey, ensuring readability
    },
    {
      English: "polite",
      Japanese: "丁寧 (ていねい)",
      color: "#80ff00",
      icon: "🙂",
      description:
        "Courteous and considerate, showing good manners and respect.",
      textColor: "#000000",
    },
    {
      English: "respectful",
      Japanese: "尊敬する (そんけいする)",
      color: "#40ff00",
      icon: "😊",
      description:
        "Shows admiration and high regard for others, very thoughtful.",
      textColor: "#000000",
    },
    {
      English: "formal",
      Japanese: "正式 (せいしき)",
      color: "#00ff00",
      icon: "🤵",
      description:
        "Adheres to established rules and customs, often in professional contexts.",
      textColor: "#000000",
    },
    {
      English: "honorific",
      Japanese: "敬語 (けいご)",
      color: "#00ffbf",
      icon: "👑",
      description:
        "Uses language and gestures to express high respect, often in hierarchical settings.",
      textColor: "#000000", // Black for light background
    },
    {
      English: "extremely polite",
      Japanese: "非常に丁寧 (ひじょうにていねい)",
      color: "#00ffff",
      icon: "🌟",
      description:
        "Demonstrates utmost respect and courtesy, often beyond normal expectations.",
      textColor: "#000000",
    },
  ];

  return info[politeness] || "Invalid politeness level";
};

export default function DrawDiagram(props: Props) {
  const info = politenessLevelToToastInfor(props.politeness + 5) as {
    English: string;
    Japanese: string;
    color: string;
    icon: string;
    description: string;
    textColor: string;
  };
  return (
    <ArcherContainer strokeColor="white" offset={9}>
      <motion.button
        onClick={() =>
          toast(
            <section className="flex flex-col">
              <div>
                <strong>
                  {info.English.toUpperCase()} / {info.Japanese.toUpperCase()}
                </strong>
              </div>
              <div>{info.description}</div>
            </section>
          )
        }
        className=" text-6xl fixed right-5 top-5"
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        {info.icon}
      </motion.button>
      <section className=" h-screen flex flex-col gap-0 items-center overflow-hidden">
        <DrawTokens
          rootToken={props.rootToken}
          rootIndex={[]}
          groupedTokens={props.groupedTokens}
          depth={0}
        />
      </section>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: info.color,
            color: info.textColor,
          },
        }}
      />
    </ArcherContainer>
  );
}
