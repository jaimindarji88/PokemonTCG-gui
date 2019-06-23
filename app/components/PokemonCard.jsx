import React from 'react';
import PropTypes from 'prop-types';

import NotFoundImg from '../../public/images/no-card-found-1x1.png';

function PokemonCard({ card, notFound, ...props }) {
  if (notFound || card === undefined) {
    return (
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-1by1'>
            <img src={NotFoundImg} alt='Placeholder image' />
          </figure>
        </div>
      </div>
    );
  }

  return (
    <div className='card' {...props}>
      <div className='card-image'>
        <figure className='image is-2by3'>
          <img
            style={{ cursor: 'pointer' }}
            value={card.id}
            src={card.imageUrl}
            alt='Placeholder image'
          />
        </figure>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  card: PropTypes.object,
  notFound: PropTypes.bool
};

export default PokemonCard;
