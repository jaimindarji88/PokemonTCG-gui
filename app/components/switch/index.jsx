import React from 'react';

import './index.css';

export default function Switch() {
  return (
    <div className='switch'>
      <input type='checkbox' />
      <span className='slider round' />
    </div>
  );
}
