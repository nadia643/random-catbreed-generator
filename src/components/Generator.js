import React, { Component } from 'react';
import axios from 'axios';

export default class Generator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      breed: ''
    }
}

  async componentDidMount() {
    const url = 'https://catfact.ninja/breeds?limit=1';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ breed: data.data[0].breed });
    console.log(data.data[0]);
    



    // axios.get('https://catfact.ninja/breeds?limit=1')
    //   .then(response => {
    //     this.setState({ breed: response.data.breed });
    //   })
    //   .catch(error => {
    //     console.log(error);
        
    //   });
  }

  render() {
    return (
      <div>
        <h1>hi from generator class</h1>
        <button onClick={this.handleClick}>Click me</button>
        {this.state.loading ? <div>Loading....</div> : <div>breed...</div> }
        <p>{ this.state.breed}</p>
      </div>
    )
  }
}



    // this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick = event => {
  //   event.preventDefault();

  //   axios.get('https://catfact.ninja/breeds?limit=1')
  //   .then(response => this.setState({ breed: response.data.breed })
  //   )