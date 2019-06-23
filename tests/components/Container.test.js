import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../app/components/Container';

describe('<Container />', () => {
  it('renders without crashing', () => {
    shallow(<Container cards={[]} handlePokemonClick={() => {}} />);
  });
});
