import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Burgerbuilder from './container/Burgerbuilder/Burgerbuilder';
import Checkout from './container/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';


class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Layout>
              <Switch>
              <Route path="/" exact component={Burgerbuilder}/>
               <Route path="/Checkout" component={Checkout}/>
               </Switch>
              
        </Layout>
      </div>
    );
  }
}

export default App;
