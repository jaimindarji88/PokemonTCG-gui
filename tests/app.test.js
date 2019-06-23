import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../app/app';
import Container from '../app/components/Container';
import Header from '../app/components/Header';
import Modal from '../app/components/Modal';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders Header, Container, and Modal', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Container).length).toBe(1);
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(Modal).length).toBe(1);
  });
});
