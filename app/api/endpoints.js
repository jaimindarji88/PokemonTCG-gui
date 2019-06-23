import axios from 'axios';

import { endpoint, routes } from './config';

const api = axios.create({
  baseURL: endpoint
});

function validateParams(params) {
  const validParams = { ...params };

  if (validParams.types === 'All') {
    delete validParams.types;
  }

  if (validParams.types === 'All') {
    delete validParams.types;
  }

  return validParams;
}

// query is a Javascript object
// each key and value pair gets set into the query param
export async function getCards(query = {}) {
  // api automatically queries all
  const validParams = validateParams(query);

  const params = new URLSearchParams();
  Object.entries(validParams).forEach(entry => {
    params.append(entry[0], entry[1]);
  });

  const cardsRoute = `${routes.allCards}?${params.toString()}`;
  const cardsResponse = await api.get(cardsRoute);

  return cardsResponse.data;
}

export async function getTypes() {
  const typesResponse = await api.get(routes.allTypes);

  return typesResponse.data;
}

export async function getSets() {
  const setsResponse = await api.get(routes.allSets);

  return setsResponse.data;
}
