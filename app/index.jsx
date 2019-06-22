import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';

import 'bulma/css/bulma.min.css';
import Container from './components/Container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'All',
      search: ''
    };

    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    console.log(e.target.value);
  }

  handleTypeChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className='app'>
        <Header
          handleTypeChange={this.handleTypeChange}
          handleSearchChange={this.handleSearchChange}
        />
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
