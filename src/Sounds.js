import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

import Sound from './Sound.js';

class Sounds extends Component {
  render() {
    return (
      <div>
        <Table >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width: '200px'}}>Artist</TableHeaderColumn>
              <TableHeaderColumn>Track</TableHeaderColumn>
              <TableHeaderColumn>Download</TableHeaderColumn>
              <TableHeaderColumn style={{width: '70px'}}>Search</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.props.tracks.map(track => <Sound sound={track}/>)
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}

export  default Sounds;