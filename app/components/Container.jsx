import React from 'react';
import PropTypes from 'prop-types';

import PokemonCard from './PokemonCard';

function Container({ cards, cardError, handlePokemonClick }) {
  console.log(cardError);
  return (
    <div className='columns is-multiline'>
      {!cardError ? (
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

Container.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlePokemonClick: PropTypes.func.isRequired,
  cardError: PropTypes.bool.isRequired
};

export default Container;
