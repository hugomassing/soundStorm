import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Search extends Component {
  render() {
    return (
      <div className="row center-lg">
        <input type="text"/>
        <RaisedButton label="Get Favorites" primary={true}></RaisedButton>
      </div>
    )
  }
}

export default Search;