import 'babel-polyfill';
import mockAxios from './axios';

import { getCards } from '../../app/api/endpoints';
import getCardsData from '../mocks/api/allCards.json';

describe('api endpoint tests', () => {
  test('get all the cards, first 100', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      Promise.resolve({
        data: getCardsData
      });
    });

    const { cards } = await getCards();

    expect(cards.length).toBe(100);
    expect(cards[0].name).toBe('Cubone');
  });
});
