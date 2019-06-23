import React from 'react';

import PokemonCard from './PokemonCard';

export default function Container({ cards, handlePokemonClick }) {
  return (
    <div className='columns is-multiline'>
      {cards.length ? (
        cards.map(card => (
          <div className='column is-one-fifth' key={card.id}>
            <PokemonCard card={card} onClick={handlePokemonClick} />
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
