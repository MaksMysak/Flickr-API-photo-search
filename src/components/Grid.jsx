import React, { Component } from 'react';
import './../App.css';

class Grid extends Component {

  render() {
    const { pictures } = this.props;
    return (
        <div className="grid">
            {pictures}
        </div>
    );
  }
}

export default Grid;