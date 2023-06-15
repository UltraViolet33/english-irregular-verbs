from deep_translator import GoogleTranslator
import json
import uuid
import unidecode

file = open("./verbs.json")

data = json.load(file)

allVerbs = []

for verb in data["verbs"]:

    french_verb = GoogleTranslator(source='auto', target='fr').translate(
        verb["Base"])
    

    new_verb = {
        "id": uuid.uuid4().hex,
        "french": unidecode.unidecode(french_verb),
        "english": verb["Base"],
        "preterit": verb["Past-simple"],
        "pastParticipate": verb["Past-Participle"],
        "star": False
    }

    allVerbs.append(new_verb)


json_object = json.dumps(allVerbs, indent=4)
 

with open("sample.json", "w") as outfile:
    outfile.write(json_object)