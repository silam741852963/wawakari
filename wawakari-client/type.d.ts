type TokenMorphology = {
    Reading?: string[];
    Inflection?: string[];
}

type Token = {
    index: number;
    orth: string;
    lemma: string;
    norm: string;
    morph: TokenMorphology;
    pos: string;
    tag: string;
    dep: string;
    headIndex: number;
}
