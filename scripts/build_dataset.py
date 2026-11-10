import urllib.request
import json
import re

def strip_nikkud(text):
    return re.sub(r'[\u0591-\u05BD\u05BF-\u05C7]', '', text)

def clean_letters(text):
    text = strip_nikkud(text)
    return re.sub(r'[^א-ת]', '', text)

def separate_punct(token):
    # Match punctuation at end or start
    match_end = re.search(r'([.:,;”"\'\-]+)$', token)
    punct = match_end.group(1) if match_end else ''
    word = token[:-len(punct)] if punct else token
    return word, punct

print("Script framework ready")
