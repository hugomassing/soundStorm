import React, { Component } from 'react';

import randomColor from 'randomcolor';
import moment from 'moment';

class DottedColor extends Component {
  state = {
    style : {
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      backgroundColor : randomColor({seed : this.sumLetter(this.props.user) * moment().hour()})
    }
  }

  sumLetter(string) {
    let total = 0;
    for (let i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(0);
    }
    return total;
  }

  render() {
    const style = {
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      backgroundColor : randomColor({seed : this.sumLetter(this.props.user) * moment().hour()})
    }

    return (
      <div style={style}>

      </div>
    )
  }
}

export default DottedColor