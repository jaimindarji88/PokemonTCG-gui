import React from 'react';

export default function Input(props) {
  const { children, ...rest } = props;

  return <input {...rest}>{props.children}</input>;
}
