import React from 'react';

import PokemonTypes from './PokemonTypes';
import Select from './Select';
import Input from './Input';

const types = [
  'Colorless',
  'Darkness',
  'Dragon',
  'Fairy',
  'Fighting',
  'Fire',
  'Grass',
  'Lightning',
  'Metal',
  'Psychic',
  'Water'
];

export default function Header(props) {
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
            <Input
              className='input is-rounded'
              placeholder='Search for a card'
              onChange={props.handleSearchChange}
            />
          </div>
          <div className='navbar-item'>
            <Select onChange={props.handleTypeChange}>
              <option value='All'>All Types</option>
              {types.map(type => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className='navbar-item'>
            <Select>
              <option value='All'>All Sets</option>
            </Select>
          </div>
        </div>
        {/* <div className='navbar-end'>
          <div className='navbar-item'>
            <Switch />
          </div>
        </div> */}
      </div>
    </nav>
  );
}
