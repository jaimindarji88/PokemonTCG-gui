import requests
from lxml.html import fromstring
import json

url = 'https://pokemondb.net/pokedex'
api_url = 'https://api.pokemontcg.io/v1/cards'

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'
}

cookies = {
    '__cfduid': 'db3c81c51908a9a458e9324f98f3566041561252677'
}


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
            print(pok)
            if pok in d:
                continue

            res = requests.get(
                f'{url}/{pok}',
                headers=headers,
                cookies=cookies
            )

            if res.status_code == 200:
                html = fromstring(res.text)
                text = html.xpath(text_xpath)
                if text:
                    d[pok] = text[0]

    with open('pokemon.json', 'w') as f:
        f.write(json.dumps(d, indent=2))


get_interesting_facts()

'''
//div[@class="resp-scroll"]//table[@class="vitals-table"]//td[@class="cell-med-text"]
'''
