import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Header from './Header.js';
import Sounds from './Sounds.js';
import Users  from './Users.js';

import 'flexboxgrid/css/flexboxgrid.min.css'

injectTapEventPlugin();


class App extends Component {
  state = {
    users: [],
    input: ''
  }
  handleClick = () => {
    this.setState({
      users: this.state.input.split(','),
      tracks: []
    })
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header className="App-header"/>
          <div style={{margin : '40px 100px'}}>
            <div className="row">
              <input className="col-lg-3" onChange={this.handleChange} value={this.state.input} type="text"/>
              <RaisedButton label="Get Favorites" primary={true} onClick={this.handleClick}></RaisedButton>
              <Users className="col-lg" users={this.state.users}></Users>
            </div>
            <Sounds users={this.state.users} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
