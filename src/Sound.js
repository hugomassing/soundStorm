import React, { Component } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
//import FontIcon from 'material-ui/FontIcon';


class Sound extends Component {

  constructor() {
    super();
  /*  let downloadLink;
    if (this.props.sound.downloadable)
      downloadLink = this.props.sound.downloadable;
    else if (this.props.sound.permalink_url !== '')
      downloadLink = this.props.sound.permalink_url;
    else
      downloadLink = "https://www.google.fr/search?q=" + encodeURIComponent(this.props.sound.title);
 */
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>
          <a href={this.props.sound.user.permalink_url}>{this.props.sound.user.username}</a>
        </TableRowColumn>
        <TableRowColumn>
          <a href={this.props.sound.permalink_url}>{this.props.sound.title}</a>
        </TableRowColumn>
        <TableRowColumn>
          <a href="">DOWNLOAD</a>
        </TableRowColumn>
        <TableRowColumn>
          VK LINKS
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default Sound;
