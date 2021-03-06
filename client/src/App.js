import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap'

import { Provider } from 'react-redux';
import store from './store';

import AppNavBar from './components/AppNavBar';
import ItemModal from './components/ItemModal';
import ShoppingList from './components/ShoppingList';
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
      <AppNavBar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
      </div>
    </Provider>

    );
  }
}

export default App;
