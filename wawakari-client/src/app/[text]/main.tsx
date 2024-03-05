type Props = {
  tokens: Token[];
  politeness: number;
};

export default function Main(props: Props) {
  return (
    <main className="text-white">
      <h1>{props.politeness}</h1>
      {props.tokens.map((token) => {
        return <div key={token.index}>{token.orth}</div>;
      })}
    </main>
  );
}
