import React from 'react';

import NotFound from '../../public/images/no-card-found-1x1.png';

export default function PokemonCard({ card, notFound, ...props }) {
  if (notFound) {
    return (
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-1by1'>
            <img src={NotFound} alt='Placeholder image' />
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
