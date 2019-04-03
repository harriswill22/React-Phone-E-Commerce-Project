import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Default from './components/Defualt'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragment>
    );
  }
}

export default App;
