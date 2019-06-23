import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import Modal from './components/Modal.jsx';
import { getCards } from './api/endpoints.js';

import 'bulma/css/bulma.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'All',
      search: '',
      modalState: false,
      cards: []
    };

    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSetChange = this.handleSetChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    const id = e.target.getAttribute('value');

    if (id) {
      const clickedCard = this.state.cards.find(card => card.id === id);
      if (clickedCard) {
        this.setState({
          selectedCard: clickedCard
        });
      }
    }
    this.setState({
      modalState: !this.state.modalState
    });
  }

  async componentDidMount() {
    const { cards } = await getCards();
    this.setState({
      cards
    });
  }

  async handleSearchChange(e) {
    const search = e.target.value;

    const { cards } = await getCards({ name: search, types: this.state.type });

    this.setState({
      search,
      cards
    });
  }

  async handleTypeChange(e) {
    const type = e.target.value;

    const { cards } = await getCards({ name: this.state.search, types: type });

    this.setState({
      cards,
      type
    });
  }

  async handleSetChange(e) {
    const set = e.target.value;
    console.log(set);
    const { cards } = await getCards({
      name: this.state.search,
      types: this.state.type,
      set
    });

    this.setState({
      cards,
      set
    });
  }

  render() {
    return (
      <div className='app'>
        <Header
          handleTypeChange={this.handleTypeChange}
          handleSearchChange={this.handleSearchChange}
          handleSetChange={this.handleSetChange}
        />
        <Container
          cards={this.state.cards}
          handlePokemonClick={this.toggleModal}
        />
        <Modal
          card={this.state.selectedCard}
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
        />
      </div>
    );
  }
}
