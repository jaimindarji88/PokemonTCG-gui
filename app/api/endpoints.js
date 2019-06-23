import axios from 'axios';

import { endpoint, routes } from './config';

const api = axios.create({
  baseURL: endpoint
});

// query is a Javascript object
// each key and value pair gets set into the query param
export async function getCards(query = {}) {
  // api automatically queries all
  if (query.types === 'All') {
    delete query.types;
  }

  const params = new URLSearchParams();
  Object.entries(query).forEach(entry => {
    params.append(entry[0], entry[1]);
  });

  const cardsRoute = `${routes.allCards}?${params.toString()}`;
  const cardsResponse = await api.get(cardsRoute);

  return cardsResponse.data;
}
