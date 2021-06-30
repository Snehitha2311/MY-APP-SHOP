import React, { Fragment } from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import Menu from './components/svg/bars-solid.svg';
import Close from './components/svg/times-solid.svg';
import { BrowserRouter as Router, Routes, Link, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Products';
import {DataProvider} from './components/DataProvider';
import Details from './components/Details';
import Cart from './components/Cart';
import Demo from './components/Login';
import Clock from './components/Clocks';

import './App.css';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>

        <Header />
        {/* <Details /> */}
        <section>
          {/* <Routes>
             <Route path="products" element={ <Products /> }/>
             <Route path="products/:id" element={ <Details /> }/>
             <Route path="cart" element={ <Cart />}/>
             <Route path="clock" element={ <Clock />} />
             <Route path="login" element={ <Demo />} />
          </Routes> */}
        </section>

        
         <Switch>
            <Route path="/products" component={Products}></Route>
            <Route path="/products/:id" component={Details}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/clock" component={Clock}></Route>
            <Route path="/login" component={Demo}></Route>

        </Switch> 
         
      </Router>
    </div>
  </DataProvider>
  );
}

export default App;
