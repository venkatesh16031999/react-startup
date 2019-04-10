import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Burgerbuilder from './container/Burgerbuilder/Burgerbuilder';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
              <Burgerbuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
