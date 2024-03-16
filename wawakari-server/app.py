import spacy
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from cal_polite import calculate_politeness_level
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config.update(
    DEBUG=os.environ.get("FLASK_DEBUG")
)

nlp = spacy.load('ja_ginza_electra')

@app.route('/<string:text>', methods=['GET'])
def parse(text):
    res = ([],calculate_politeness_level(text))
    doc = nlp(text)
    for sent in doc.sents:
        for token in sent:
            res[0].append((token.i,
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

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.environ.get('PORT', 8080)))
