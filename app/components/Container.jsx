import React from 'react';
import Card from './Card';
import PokemonCard from './PokemonCard';

const cards = [
  {
    id: 'dp6-90',
    name: 'Cubone',
    nationalPokedexNumber: 104,
    imageUrl: 'https://images.pokemontcg.io/dp6/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp6/90_hires.png',
    types: ['Fighting'],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    number: '90',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Diamond & Pearl',
    set: 'Legends Awakened',
    setCode: 'dp6',
    attacks: [
      {
        cost: ['Colorless'],
        name: 'Headbutt',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: ['Fighting', 'Colorless'],
        name: 'Bonemerang',
        text:
          'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Lightning',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '+10'
      }
    ]
  },
  {
    id: 'ex14-85',
    name: 'Windstorm',
    imageUrl: 'https://images.pokemontcg.io/ex14/85.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ex14/85_hires.png',
    supertype: 'Trainer',
    subtype: 'Item',
    hp: 'None',
    number: '85',
    artist: 'Ryo Ueda',
    rarity: 'Uncommon',
    series: 'EX',
    set: 'Crystal Guardians',
    setCode: 'ex14',
    text: [
      "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent's) and discard them."
    ]
  },
  {
    id: 'pop9-17',
    name: 'Turtwig',
    nationalPokedexNumber: 387,
    imageUrl: 'https://images.pokemontcg.io/pop9/17.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pop9/17_hires.png',
    types: ['Grass'],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: ['Colorless', 'Colorless'],
    convertedRetreatCost: 2,
    number: '17',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'POP',
    set: 'POP Series 9',
    setCode: 'pop9',
    attacks: [
      {
        cost: ['Grass'],
        name: 'Absorb',
        text: 'Remove 1 damage counter from Turtwig.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: ['Grass', 'Colorless', 'Colorless'],
        name: 'Parboil',
        text:
          'If you have Chimchar in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.',
        damage: '40+',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-20'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  }
];

export default class Container extends React.Component {
  render() {
    return (
      <div className='columns is-multiline'>
        {cards.length ? (
          cards.map(card => (
            <div className='column is-one-fifth' key={card.id}>
              <PokemonCard card={card} />
            </div>
          ))
        ) : (
          <React.Fragment>
            <div className='column' />
            <div className='column is-one-fifth'>
              <PokemonCard notFound={true} />
            </div>
            <div className='column' />
          </React.Fragment>
        )}
      </div>
    );
  }
}
