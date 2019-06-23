import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';

import Select from '../../app/components/Select';

describe('<Select />', () => {
  it('renders without crashing', () => {
    shallow(<Select />);
  });
});
