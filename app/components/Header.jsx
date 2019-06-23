import React from 'react';

import { getTypes, getSets } from '../api/endpoints';
import Select from './Select';
import Input from './Input';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      types: [],
      sets: [],
      mobileNavbar: false
    };

    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
  }

  async componentDidMount() {
    try {
      const { types } = await getTypes();
      this.setState({
        types
      });
    } catch (e) {
      this.setState({
        types: ['Types not found']
      });
    }

    try {
      const { sets } = await getSets();

      this.setState({
        sets: sets.map(set => set.name)
      });
    } catch (e) {
      this.setState({
        sets: ['Sets not found']
      });
    }
  }

  toggleBurgerMenu(event) {
    const target = document.querySelector('.navbar-menu');
    target.classList.toggle('is-active');
  }

  render() {
    const {
      handleSearchChange,
      handleTypeChange,
      handleSetChange
    } = this.props;

    return (
      <nav
        className='navbar is-fixed-top'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='navbar-brand'>
          <div className='navbar-item'>Pokemon TCG</div>
          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            onClick={this.toggleBurgerMenu}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div className='navbar-menu'>
          <div className='navbar-start'>
            <div className='navbar-item'>
              <Input
                className='input is-rounded'
                placeholder='Search for a card'
                onChange={handleSearchChange}
              />
            </div>
            <div className='navbar-item'>
              <Select onChange={handleTypeChange}>
                <option value='All'>All Types</option>
                {this.state.types.map(type => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </Select>
            </div>
            <div className='navbar-item'>
              <Select onChange={handleSetChange}>
                <option value='All'>All Sets</option>
                {this.state.sets.map(set => (
                  <option value={set} key={set}>
                    {set}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
