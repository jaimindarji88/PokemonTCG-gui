import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../app/components/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const func = () => {};

    shallow(
      <Header
        handleSearchChange={func}
        handleTypeChange={func}
        handleSetChange={func}
      />
    );
  });
});
