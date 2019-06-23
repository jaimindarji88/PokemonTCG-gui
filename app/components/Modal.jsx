import React from 'react';

export default function Modal({ card, closeModal, modalState }) {
  if (!modalState) {
    return null;
  }

  return (
    <div className='modal is-active'>
      <div className='modal-background' onClick={closeModal} />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <div className='column' />
          <div className='column is-two-fifths'>
            <img className='image' src={card.imageUrl} alt='' />
          </div>
          <div className='column' />
        </header>
        <section className='modal-card-body'>
          <table className='table'>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{card.name}</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{card.types}</td>
              </tr>
              <tr>
                <th>Set</th>
                <td>{card.set}</td>
              </tr>
              <tr>
                <th>Series</th>
                <td>{card.series}</td>
              </tr>
              <tr>
                <th>Interesting Fact</th>
                <td>Very Interesting</td>
              </tr>
            </tbody>
          </table>
        </section>
        <button className='modal-close is-large' aria-label='close' />
      </div>
    </div>
  );
}
