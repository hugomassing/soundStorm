import React, { Component } from 'react';

import DottedColor from "./DottedColor.js";

class Users extends Component {
  render () {
    return (
      <div className="box">
        <div className="row around-xs" style={{paddingLeft: '50px'}}>
          {
            this.props.users.map(user =>
              <div key={user.toString()} className="col-md" style={{margin : '9px', position: 'relative'}}>
              <div  style={{ position: 'absolute', top: '4px', left: '0px' }}>
                <DottedColor user={user} />
              </div>
              <span>{user}</span>
          </div>)
          }
        </div>
      </div>
    )
  }
}


export  default Users;