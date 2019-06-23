import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../app/components/Input';

describe('<Input />', () => {
  it('renders without crashing', () => {
    shallow(<Input />);
  });
});
