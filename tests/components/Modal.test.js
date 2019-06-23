import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../../app/components/Modal';

describe('<Modal />', () => {
  it('renders without crashing', () => {
    shallow(<Modal closeModal={() => {}} modalState={false} />);
  });
});
