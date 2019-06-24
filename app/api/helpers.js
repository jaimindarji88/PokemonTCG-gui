import { pokemonInfo } from './constants';

export function getInterestingInfo(pokemonName) {
  const multiName = pokemonName.toLowerCase().split(' ');
  let info;
  multiName.forEach(name => {
    if (name in pokemonInfo) {
      info = pokemonInfo[name];
    }
  });

  return info;
}
