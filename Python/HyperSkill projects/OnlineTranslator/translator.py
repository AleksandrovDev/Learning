from bs4 import BeautifulSoup
import requests
import sys
import urllib3




languages = ["arabic", "german",
             "english", "spanish",
             "french", "hebrew",
             "japanese", "dutch",
             "polish", "portuguese",
             "romanian", "russian",
             "turkish"]

argss = sys.argv
for i in argss:
    print(i)




your_language = argss[1]

if argss[2]=="all":
    translate_to_language = -1
else:
    try:
        translate_to_language = languages.index(argss[2])-1
    except Exception:
        print(f"Sorry, the program doesn't support {argss[2]}")
        translate_to_language = None
word = argss[3]



# print(
    # "Hello, you're welcome to the translator. Translator supports: ")
# for i in range(13):
    # print(f"{i + 1}. {languages[i].capitalize()}")
# print("Type the number of your language: ")

# your_language = languages[int(input()) - 1]
languages.remove(your_language)

# print("Type the number of a language you want to translate to or '0' to translate to all languages: ")

# translate_to_language = int(input()) - 1
# print("Type the word you want to translate:")
# word = input()
link = "https://context.reverso.net/translation/"


def check_success(url):
    if requests.get(url):
        return "Success"
    else:
        return "Fail"


def print_results(results_range, list, header, *args):
    if args[0] is None:
        print(header)
        for i in range(results_range):
            print(list[i])
        print()
    else:
        args[0].writelines(header)
        print(header)
        for i in range(results_range):
            try:
                print(list[i])
                args[0].writelines(list[i] + "\n")
            except Exception:
                print(f"Sorry, unable to find {word}")
        print()
        args[0].writelines("\n")


def translate_to_specific_language(link, translate_to, results_words, results_examples, *args):
    list_of_translations = []
    list_of_examples = []
    translate_to_language = languages[translate_to]
    link = link + f"{your_language}-{translate_to_language}/{word}"
    try:
        r = requests.get(link, headers={'User-Agent': 'Mozilla/5.0'})
    except (requests.ConnectionError, requests.Timeout) as exception:
        print("Something wrong with your internet connection")



    header_words = f"{translate_to_language.capitalize()} Translations:\n"

    soup = BeautifulSoup(r.content, 'html.parser')
    a = soup.find_all("a", class_="translation")

    for i in a:
        list_of_translations.append(i.text.strip())
    list_of_translations.remove("Translation")
    print_results(results_words, list_of_translations, header_words, args[0])

    header_examples = f"{translate_to_language.capitalize()} Examples:\n"
    examples = soup.find_all("div", {"class": ['src ltr', 'trg ltr']})
    for i in examples:
        list_of_examples.append(i.text.strip())
    print_results(results_examples, list_of_examples, header_examples, args[0])
    list_of_examples.clear()
    list_of_translations.clear()



if translate_to_language is None:
    pass
elif translate_to_language != -1:
    translate_to_specific_language(link, translate_to_language, 5, 10, None)

else:
    with open(f"{word}.txt", "w", encoding="utf-8") as f:
        for i in range(12):
            translate_to_specific_language(link, i, 1, 2, f)
