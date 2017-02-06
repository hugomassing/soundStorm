import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Header from './Header.js';
import Sounds from './Sounds.js';

import 'flexboxgrid/css/flexboxgrid.min.css'

injectTapEventPlugin();

export const SC_CLIENT_ID = '25a6312cd0379dbf2b4d8fce66d4f112';

class App extends Component {
  state = {
    tracks: [],
    input: ''
  }
  handleClick = () => {
    fetch(`http://api.soundcloud.com/users/${this.state.input}/favorites.json?client_id=${SC_CLIENT_ID}&limit=200&offset=0`)
      .then(response => {
        return response.json();
      })
      .then((tracks) => {
        console.log(tracks);
        this.setState({
          tracks: tracks,
        });
      });
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header className="App-header"/>
          <div style={{margin : '40px 100px'}} >
            <div className="row center-lg">
              <input onChange={this.handleChange} value={this.state.input} type="text"/>
              <RaisedButton label="Get Favorites" primary={true} onClick={this.handleClick}></RaisedButton>
            </div>
            <Sounds tracks={this.state.tracks} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
