import React, { Component } from 'react';
import './../App.css';

class Header extends Component {

  render() {
    const { value, handleChange } = this.props;
    return (
        <div className="header">
            <p>Flickr API photo search</p>
            <p>
            <input 
                className="input"
                value={value} 
                onChange={handleChange} 
            />
            </p>
        </div>
    );
  }
}

export default Header;