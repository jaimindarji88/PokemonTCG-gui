import requests
from lxml.html import fromstring
import json

# website to get pokedex entries for each pokemon
url = 'https://pokemondb.net/pokedex'
# api to get all the pokemon names on the cards
api_url = 'https://api.pokemontcg.io/v1/cards'


# gets all the names of the pokemon cards
# saved to file
def get_all_pokemon():
    # 112 unique pages in the api
    page_limit = 112
    with open('pokemon.csv', 'w') as f:
        for page_num in range(page_limit+1):
            print(page_num)
            res = requests.get(api_url, params={'page': page_num})
            data = res.json()
            for pokemon in data['cards']:
                if pokemon['supertype'] == 'Pokémon':
                    f.write(f'{pokemon["name"]}\n')


# run get all_pokemon first
# Uses the list of pokemon names to get the pokedex information of the pokemon
# Saves to a json file, which can be imported into Javascript
def get_interesting_facts():
    d = {}
    # xpath selector to get the interesting information
    text_xpath = '//div[@class="resp-scroll"]//table[@class="vitals-table"]//td[@class="cell-med-text"]//text()'

    with open('pokemon.csv') as f:
        for pokemon in f.readlines():
            pok = pokemon.lower().strip()
            if pok in d:
                continue

            res = requests.get(f'{url}/{pok}')

            if res.status_code == 200:
                html = fromstring(res.text)
                text = html.xpath(text_xpath)
                if text:
                    d[pok] = text[0]

    with open('pokemon.json', 'w') as f:
        f.write(json.dumps(d, indent=2))
