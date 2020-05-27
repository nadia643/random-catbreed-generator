import React, { Component } from 'react';
// import axios from 'axios';

export default class Generator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      breed: '',
      coat: '',
      country: '',
      origin: '',
      pattern: ''
    }
}

  async componentDidMount() {
    // limit is how many breeds we want in our array
    const limit = 100;
    const url = `https://catfact.ninja/breeds?limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    const randomNumber = Math.floor(Math.random() * limit);
    this.setState({ 
      breed: data.data[randomNumber].breed,
      coat: data.data[0].coat,
      country: data.data[0].country,
      origin: data.data[0].origin,
      pattern: data.data[0].pattern,
      loading: false
    });
    console.log(data.data[0]);
    console.log(data.data);
    
  }

  // randomCat() {
  //   console.log(this.state.data[randomNumber]);
    
  // }

  render() {
    return (
      <div>
        <h1>hi from cat generator</h1>
        <button onClick={this.handleClick}>Click me</button>

        {this.state.loading || !this.state.breed ? (
          <div>Loading....</div>
         ) : (
          <div> 
            <div> 
              <p>{ this.state.breed }</p>
              <p>{ this.state.coat }</p>
              <p>{ this.state.country }</p>
              <p>{ this.state.origin }</p>
              <p>{ this.state.pattern }</p>
            </div>
          </div>
          )}
          </div>
    );
  }
}
