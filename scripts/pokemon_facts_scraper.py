import requests
from lxml.html import fromstring
import json

url = 'https://pokemondb.net/pokedex'
api_url = 'https://api.pokemontcg.io/v1/cards'


def get_all_pokemon():
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
def get_interesting_facts():
    d = {}
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
