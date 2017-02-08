import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import Sound from './Sound.js';

export const SC_CLIENT_ID = '25a6312cd0379dbf2b4d8fce66d4f112';

class Sounds extends Component {
  state = {
    users: [],
    tracks: [],
    page: 1
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.length > 0) {
      this.loadItems(nextProps.users, 1);
      this.setState({
        users: nextProps.users
      })
    }
  }

  handleClick() {
    this.setState({
      page: this.state.page + 1
    },() =>{
      console.log(this.state.page);
      this.loadItems(this.state.users,this.state.page);
    });
  }

  loadItems(users, page) {
    const limit = 5;
    users.forEach(user => {
      fetch(`http://api.soundcloud.com/users/${user}/favorites.json?client_id=${SC_CLIENT_ID}&limit=${limit}&offset=${page * limit}`)
        .then(response => {
          return response.json();
        })
        .then((tracks) => {
          tracks.forEach(track => {
            track.userLiked = user;
          });
          this.setState({
            tracks: this.state.tracks.concat(tracks),
          });
        });
    })

  }

  render() {
    return (
      <div  style={{marginTop : '30px'}}>
        <Table>
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
              this.state.tracks.map(track => <Sound key={ track.userLiked + '-'+ track.id} sound={track}/>)
            }
          </TableBody>
        </Table>
        {
          (this.state.tracks.length > 0 ?
          <div className="row center-xs" style={{marginTop: '30px'}}>
            <div>
              <RaisedButton label="Load More" primary={true} onClick={this.handleClick.bind(this)}></RaisedButton>
            </div>
          </div>
            : null)
        }
        </div>
     )
  }
}

export  default Sounds;