import React, { PureComponent } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import Header from './Header.js';
import Sounds from './Sounds.js';
//import Users  from './Users.js';

import 'flexboxgrid/css/flexboxgrid.min.css'

export const SC_CLIENT_ID = '25a6312cd0379dbf2b4d8fce66d4f112';

injectTapEventPlugin();


class App extends PureComponent {

  state = {
    users : {},
    input: 'sicarmy,maazelbeats,diplo'
  }

  loadItems(users) {
    const limit = 5;
    this.setState({
      loading : true
    });
    Promise.all(
      users.map(
        user =>
          fetch(`http://api.soundcloud.com/users/${user}/favorites.json?client_id=${SC_CLIENT_ID}&limit=${limit}&offset=${0 * limit}`)
            .then(response => response.json())
            .then(tracks => {
                this.setState({
                  users: {
                    ...this.state.users,
                    [user]: {
                      name: user,
                      tracks: tracks,
                    }
                  }
                })
                return tracks;
              }
            )
      )
    ).then(tracks => {
      this.setState({
        loading : false
      });
    });
  }


  handleClick = () => {
    this.loadItems(this.state.input.split(',').map(user => user.trim()));
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
            </div>
            <Tabs className="row" style={{ marginTop : '20px'}}>
              {
                Object.keys(this.state.users).map(user =>
                  <Tab key={user.toString()} label={user}>
                    <Sounds user={this.state.users[user]}></Sounds>
                  </Tab>
                )
              }
            </Tabs>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
