import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Sounds extends Component {
  render() {
    return (
      <div>
        <Table >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Track</TableHeaderColumn>
              <TableHeaderColumn>Download</TableHeaderColumn>
              <TableHeaderColumn>Search</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>

          </TableBody>
        </Table>
      </div>
    )
  }
}

export  default Sounds;