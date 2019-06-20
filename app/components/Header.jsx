import React from 'react';

import Switch from './switch';

export default function Header() {
  return (
    <nav
      className='navbar is-fixed-top'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <div className='navbar-item'>Pokemon TCG</div>
      </div>

      <div className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <input
              className='input is-rounded'
              type='text'
              placeholder='Search for card'
            />
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Switch />
          </div>
        </div>
      </div>
    </nav>
  );
}
