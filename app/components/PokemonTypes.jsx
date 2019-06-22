import React from 'react';

export default function PokemonTypes(props) {
  const { types } = props;

  return (
    <div class='control'>
      <div class='select'>
        <select>
          <option>Select Type</option>
          {types.map(type => (
            <option>{type}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
