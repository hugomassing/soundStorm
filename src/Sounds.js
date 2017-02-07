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
              <TableHeaderColumn style={{width: '20px'}}></TableHeaderColumn>
              <TableHeaderColumn style={{width: '200px'}}>Artist</TableHeaderColumn>
              <TableHeaderColumn>Track</TableHeaderColumn>
              <TableHeaderColumn>Download</TableHeaderColumn>
              <TableHeaderColumn style={{width: '70px'}}>Search</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
            {
              this.props.tracks.map(track => <Sound key={track.id} sound={track}/>)
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}

export  default Sounds;