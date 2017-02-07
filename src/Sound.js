import React, { Component } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
//import FontIcon from 'material-ui/FontIcon';
import randomColor from 'randomcolor';
import md5 from 'blueimp-md5';

import {SC_CLIENT_ID} from './App.js';


class Sound extends Component {

  /*state = {
    rowColor : randomColor({
      seed : this.props.sound.userLiked
    })
  }*/

  render() {
    return (
      <TableRow>
        <TableRowColumn style={{width: '20px'}}>
          <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor : randomColor({seed : md5(this.props.sound.userLiked)})}}></div>
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
                : <a href={'http://google.com/search?q=' + encodeURIComponent(this.props.sound.title)} target='_blank'>Search Google</a>)
          )}
        </TableRowColumn>
        <TableRowColumn style={{width: '70px'}}>
          <a href={'https://vk.com/search?' + encodeURIComponent('c[q]=' + this.props.sound.title + '&c[section]=auto')} target='_blank'>VK</a>
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default Sound;
