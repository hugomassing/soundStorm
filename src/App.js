import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header.js';
import Search from './Search.js';
import Sounds from './Sounds.js';

import 'flexboxgrid/css/flexboxgrid.min.css'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header className="App-header"/>
          <div style={{margin : '40px 100px'}} >
            <Search />
            <Sounds />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
