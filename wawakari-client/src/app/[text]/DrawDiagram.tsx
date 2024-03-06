import DrawTokens from "./DrawTokens";

type Props = {
  rootToken: Token;
  groupedTokens: Token[][];
};

export default function DrawDiagram(props: Props) {
  return (
    <section className=" h-screen flex flex-col gap-0 items-center max-content">
      <DrawTokens
        rootToken={props.rootToken}
        rootIndex={[]}
        groupedTokens={props.groupedTokens}
        depth={0}
      />
    </section>
  );
}
