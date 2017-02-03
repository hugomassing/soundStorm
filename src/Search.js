import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SC_CLIENT_ID = '25a6312cd0379dbf2b4d8fce66d4f112';

class Search extends Component {
  state = {
    result: [],
    input: ''
  }
  handleClick = () => {
    fetch(`http://api.soundcloud.com/users/${this.state.input}/favorites.json?client_id=${SC_CLIENT_ID}&limit=40&offset=0`)
      .then(response => {
        return response.json();
      })
      .then((tracks) => {
        this.setState({
          result: tracks,
        });
      });
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div className="row center-lg">
        <input onChange={this.handleChange} value={this.state.input} type="text"/>
        <RaisedButton label="Get Favorites" primary={true} onClick={this.handleClick}></RaisedButton>
      </div>
    )
  }
}

export default Search;