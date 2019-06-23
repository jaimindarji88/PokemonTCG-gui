export const endpoint = 'https://api.pokemontcg.io/v1/';

export const routes = {
  allCards: 'cards',
  card(id) {
    return `cards/${id}`;
  },
  allSets: 'sets',
  set(id) {
    return `sets/${id}`;
  },
  allTypes: 'types',
  subtypes: 'subtypes',
  supertypes: 'supertypes'
};
