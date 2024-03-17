import spacy
import sys

def calculate_politeness_level(sentence):
    # Load the Ginza model
    nlp = spacy.load("ja_ginza_electra")

    # Tokenize the sentence using Ginza
    doc = nlp(sentence)

    # Define a list of polite prefixes in Japanese
    polite_prefixes = ["お", "ご"]
    polite_tokens = ["ドウゾ","ドウモ","デス","マス","ワタシ","サマ","サン","クン","チャン","センセイ","センパイ","マセ","デショウ","カタ","ソチラ","コチラ","アチラ","ドチラ"]
    polite_expression = ["ございあります","おはようございます","いらっしゃいます","おいでになります"
                        ,"おっしゃいます","くださいます","なさいます","ごぞんじです","ご存じです",
                         "お亡くなりになります","おなくなりになります","召し上がります",
                         "めしあがります","ごらんになります","ご覧になります","おめにかかります"
                         ,"お目にかかります","さしあげます","差し上げます","おります","申します"
                         ,"もうします","もうしあげます","申し上げます","参ります","まいります",
                         "伺います","うかがいます","いたします","ぞんじています","存じています",
                         "ぞんじしております","存じしております","ぞんじません","存じません",
                         "いただきます","おじゃまします","お邪魔します","はいけんします","はいけんします","いただけます","いただけませんか"]
    impolite_expression = ["貴様ども","おまえらども","馬鹿ども"]
    impolite_tokens  = ["バカ","ヤロー","アホ","チクショウ","キサマ","ジジイ","ババア","バカヤロー",
                        "マヌケ","クソ","ザコ","アイツ","ゴミ","クズ","カス","コイツ","オレ","オマエ"]
   # Initialize politeness level
    politeness_level = 0

    for token in doc:
        for i in impolite_tokens:
            if (str(token.morph.get("Reading"))[2:-2]).__eq__(i): politeness_level -= 1
    for expr in impolite_expression:
        index= sentence.find(expr)
        if index != -1: politeness_level =-5
    if politeness_level < -5: politeness_level = -5
    if politeness_level < 0: return politeness_level
    # Iterate through tokens in the sentence
    for token in doc:
        # Check if the token is a word
        if token.is_alpha:
            # Check if the token starts with a polite prefix
            for i in polite_prefixes:
                if token.text.startswith(i):
                    politeness_level += 1
    for token in doc:
        for i in polite_tokens:
            if (str(token.morph.get("Reading"))[2:-2]).__eq__(i): politeness_level += 1

    for expr in polite_expression:
        index= sentence.find(expr)
        if index != -1: politeness_level =5
    # Normalize the politeness level to be between -5 and 5
    if politeness_level >5: politeness_level = 5
    return politeness_level
