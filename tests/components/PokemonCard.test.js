import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';

import PokemonCard from '../../app/components/PokemonCard';

describe('<PokemonCard />', () => {
  it('renders without crashing', () => {
    shallow(<PokemonCard />);
  });
});
