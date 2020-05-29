import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
      <div className="header">
        
        
        <div className="header-icons">
          <FontAwesomeIcon icon={faCat} size="10x" />
          <FontAwesomeIcon icon={faCat} size="10x" flip="horizontal" />
        </div>
        

      </div>
      <div className="header-links">
      <Link to="/breeds">Breed Generator</Link> 
      <Link to="/">Home</Link> 
      <Link to="/pics">Pics</Link> 
      <Link to="/facts">Fact generator</Link>
  </div>
  </div>
      
    )
  }
}
