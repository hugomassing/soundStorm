import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Sound from './Sound.js';


class Sounds extends Component {
  state = {
    loading: false
  }

  handleClick() {
    this.setState({
      page: this.state.users + 1
    },() =>{
      this.loadItems(this.state.users);
    });
  }

   render() {
    return (
      <div  style={{marginTop : '30px'}}>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width: '200px'}}>Artist</TableHeaderColumn>
              <TableHeaderColumn>Track</TableHeaderColumn>
              <TableHeaderColumn>Download</TableHeaderColumn>
              <TableHeaderColumn style={{width: '70px'}}>Search</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true}>
            {
              this.props.user.tracks.map(
                track =>
                  <Sound key={this.props.user.name + '-'+ track.id} sound={track}/>
              )
            }
          </TableBody>
        </Table>
        {
          ( this.props.user.tracks.length > 0 ?
          <div className="row center-xs" style={{marginTop: '30px'}}>
            <div>
              <RaisedButton label={this.state.loading ? <FontIcon className="material-icons" style={{color: 'white', fontSize: '16px'}}>autorenew</FontIcon> : 'Load More'} primary={true} onClick={this.handleClick.bind(this)}></RaisedButton>
            </div>
          </div>
            : null)
        }
      </div>
     )
  }
}

export  default Sounds;