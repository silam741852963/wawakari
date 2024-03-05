import spacy
from flask import Flask, request, jsonify

app = Flask(__name__)

nlp = spacy.load('ja_ginza_electra')

@app.route('/<string:text>', methods=['GET'])
def parse(text):
    res = []
    doc = nlp(text)
    for sent in doc.sents:
        for token in sent:
            res.append((token.i,
                token.orth_,
                token.lemma_,
                token.norm_,
                token.morph.get("Reading"),
                token.pos_,
                token.morph.get("Inflection"),
                token.tag_,
                token.dep_,
                token.head.i,))
    return jsonify(res), 200

if __name__ == 'main':
    app.run(debug=True, port=5000)