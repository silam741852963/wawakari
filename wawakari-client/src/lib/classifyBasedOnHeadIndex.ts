export default function classifyTokens(tokens: Token[]): [Token, Token[][]] {
    const rootToken = tokens.find(token => token.dep === 'ROOT') as Token;
    const groupedTokens: Token[][] = [];

    tokens.forEach(token => {
        if (token.headIndex !== token.index) { // Exclude the root token
            if (!groupedTokens[token.headIndex]) {
                groupedTokens[token.headIndex] = [];
            }
            groupedTokens[token.headIndex].push(token);
        }
    });

    return [rootToken, groupedTokens];
}