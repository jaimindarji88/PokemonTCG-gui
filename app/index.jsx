import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';

import 'bulma/css/bulma.min.css';
import Container from './components/Container.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
