import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Default from './components/Defualt'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Product from './components/Product';
import Defualt from './components/Defualt';
class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Defualt}/>
      </Switch>
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragment>
    );
  }
}

export default App; 
