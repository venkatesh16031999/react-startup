import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Order from './container/Order/Order';
import Burgerbuilder from './container/Burgerbuilder/Burgerbuilder';
import Checkout from './container/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';


class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Layout>
              <Switch>
               <Route path="/Checkout" component={Checkout}/>
               <Route path="/Order"  component={Order}/>
               <Route path="/" exact component={Burgerbuilder}/>
               </Switch>
              
        </Layout>
      </div>
    );
  }
}

export default App;
