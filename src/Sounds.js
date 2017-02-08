import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Sound from './Sound.js';

export const SC_CLIENT_ID = '25a6312cd0379dbf2b4d8fce66d4f112';

class Sounds extends Component {
  state = {
    users: [],
    tracks: [],
    page: 1,
    loading : false
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
      this.loadItems(this.state.users,this.state.page);
    });
  }

  loadItems(users, page) {
    const limit = 5;
    this.setState({
      loading : true
    });

    Promise.all(
      users.map(
        user =>
          fetch(`http://api.soundcloud.com/users/${user}/favorites.json?client_id=${SC_CLIENT_ID}&limit=${limit}&offset=${page * limit}`)
            .then(response => response.json())
            .then(tracks => {
              tracks.map(track => track.userLiked = user);
              return tracks;
            }
          )
      )
    ).then(tracks => {
      console.log(tracks)
      this.setState({
        tracks : this.state.tracks.concat(...tracks),
        loading : false
      });
    });

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