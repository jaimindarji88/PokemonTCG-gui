import React from 'react';

export default function Select(props) {
  const { children, ...rest } = props;

  return (
    <div className='select'>
      <select {...rest}>{children}</select>
    </div>
  );
}
