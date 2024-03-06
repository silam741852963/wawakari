import DrawDiagram from "@/app/[text]/DrawDiagram";
import classifyTokens from "@/lib/classifyBasedOnHeadIndex";

type Props = {
  tokens: Token[];
  politeness: number;
};

export default function Main(props: Props) {
  const [root, tokens] = classifyTokens(props.tokens);
  return (
    <main className="text-white">
      <DrawDiagram rootToken={root} groupedTokens={tokens} />
    </main>
  );
}
