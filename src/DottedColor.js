import React, { Component } from 'react';

import randomColor from 'randomcolor';
import md5 from 'blueimp-md5';

class DottedColor extends Component {
  state = {
    style : {
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      backgroundColor : randomColor({seed : md5(this.props.user)})
    }
  }

  render() {
    return (
      <div style={this.state.style}>

      </div>
    )
  }
}

export default DottedColor