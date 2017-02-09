import React, { Component } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';

import {SC_CLIENT_ID} from './App.js';

import DottedColor from "./DottedColor.js";

class Sound extends Component {

  state = {
    iconStyles : {
      fontSize : '16px',
      top: '3px',
      left: '4px'
    }
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn style={{width: '20px'}}>
          <DottedColor user={this.props.sound.userLiked}></DottedColor>
        </TableRowColumn>
        <TableRowColumn style={{width: '200px'}}>
          <a href={this.props.sound.user.permalink_url}>{this.props.sound.user.username}</a>
        </TableRowColumn>
        <TableRowColumn>
          <a href={this.props.sound.permalink_url}>{this.props.sound.title}</a>
        </TableRowColumn>
        <TableRowColumn>
          {(this.props.sound.downloadable
            ? <a href={this.props.sound.download_url + '?client_id=' + SC_CLIENT_ID} target='_blank'>Download</a>
            : (this.props.sound.purchase_url
              ? <a href={this.props.sound.purchase_url} target='_blank'>{this.props.sound.purchase_url}</a>
                : <a href={'http://google.com/search?q=' + encodeURIComponent(this.props.sound.title)} target='_blank'>
                  Search Google
                  <FontIcon className="material-icons" style={this.state.iconStyles}>search</FontIcon>
                  </a>)
          )}
        </TableRowColumn>
        <TableRowColumn style={{width: '70px'}}>
          <a href={'https://vk.com/search?' + 'c%5Bq%5D=' + encodeURIComponent(this.props.sound.title) + '&c%5Bsection%5D=auto'} target='_blank'>
            <span>VK</span>
            <FontIcon className="material-icons" style={this.state.iconStyles}>search</FontIcon>
          </a>
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default Sound;
