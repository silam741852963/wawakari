import get_parse from "@/action/parse";
import Main from "./main";

type Props = {
  params: {
    text: string;
  };
};

// export async function generateStaticParams() {
//   const users = await getUsers();

//   if (!users) return [];

//   return users.map((user) => ({
//     uid: user.uid,
//   }));
// }

export async function generateMetadata({ params: { text } }: Props) {
  return {
    title: decodeURIComponent(text),
  };
}

export default async function Text({ params: { text } }: Props) {
  const res = await get_parse(text);
  const tokens: Token[] = res[0].map((token: any) => ({
    index: token[0],
    orth: token[1],
    lemma: token[2],
    norm: token[3],
    morph: {
      Reading: token[4],
      Inflection: token[6],
    },
    pos: token[5],
    tag: token[7],
    dep: token[8],
    headIndex: token[9],
  }));
  const politeness = res[1] as number;
  console.log(tokens);
  return <>{<Main tokens={tokens} politeness={politeness} />}</>;
}
