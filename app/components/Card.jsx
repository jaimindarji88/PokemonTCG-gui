import React from 'react';

export default function Card(props) {
  const { card } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-2by3'>
          <img src={card.imageUrl} alt='Placeholder image' />
        </figure>
      </div>
    </div>
  );
}
