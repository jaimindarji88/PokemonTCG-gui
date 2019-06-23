import React from 'react';
import PropTypes from 'prop-types';

import { getInterestingInfo } from '../api/helpers';

function Modal({ card, closeModal, modalState }) {
  if (!modalState || card === undefined) {
    return null;
  }

  let interestingInfo;
  if (card.supertype === 'Energy') {
    interestingInfo =
      'Energy cards are used to allow a Pokemon to use an attack.';
  } else {
    interestingInfo = getInterestingInfo(card.name);
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
                <td>{card.types || card.supertype}</td>
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
                <td>
                  {interestingInfo
                    ? interestingInfo
                    : card.text || 'Could not find an interesting fact.'}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <button className='modal-close is-large' aria-label='close' />
      </div>
    </div>
  );
}

Modal.propTypes = {
  card: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired
};

export default Modal;
