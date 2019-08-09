import React, { Component } from 'react';

import ListContainer from './containers/ListContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <ListContainer/>
        </div>        
      </div>
    );
  }
}

export default App;
