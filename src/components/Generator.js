import React, { Component } from 'react';
import axios from 'axios';

export default class Generator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breed: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    event.preventDefault();

    axios.get('https://catfact.ninja/breeds?limit=1')
    .then(response => {
      console.log(response.data);
    })
      
      // this.setState({ breed: response.data.country }))
    
    
    
  }



  render() {
    return (
      <div>
        <h1>hi from generator class</h1>
        <button onClick={this.handleClick}>Button</button>
        <p>{this.state.breed}</p>
      </div>
    )
  }
}
