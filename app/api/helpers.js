import { pokemonInfo } from './constants';

export function getInterestingInfo(pokemonName) {
  const multiName = pokemonName.toLowerCase().split(' ');
  let info;
  console.log(multiName);
  multiName.forEach(name => {
    console.log(name);
    if (name in pokemonInfo) {
      info = pokemonInfo[name];
    }
  });

  return info;
}
