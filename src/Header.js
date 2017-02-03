import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
    render() {
        return (
          <AppBar
            title="soundStorm"
            iconClassNameLeft="none"
          />
        )
    };
}

export default Header;
