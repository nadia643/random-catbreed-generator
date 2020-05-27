import React, { Component } from 'react';
// import axios from 'axios';

export default class BreedGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      catData: [],
      loading: true,
      breed: '',
      coat: '',
      country: '',
      origin: '',
      pattern: ''
    }
    this.handleClick = this.handleClick.bind(this);

}

  async handleClick() {
    // limit is how many breeds we want in our array (up to 98 from the api)
    const limit = 98;
    const url = `https://catfact.ninja/breeds?limit=${limit}`;
    const response = await fetch(url);
    const catData = await response.json();
    const randomNumber = Math.floor(Math.random() * limit);
    this.setState({ 
      catData: catData.data[randomNumber],
      breed: catData.data[randomNumber].breed,
      coat: catData.data[randomNumber].coat,
      country: catData.data[randomNumber].country,
      origin: catData.data[randomNumber].origin,
      pattern: catData.data[randomNumber].pattern,
    })
    console.log(catData.data[randomNumber]); 
  }

  componentDidCatch(error) {
    console.log('error');
    
  }
 


  render() {
    return (
      <div>
        <h1>hi from cat generator</h1>
        <button onClick={this.handleClick}>Click me</button>
          <div> 
            <div> 
              <p>Breed: { this.state.breed }</p>
              <p>Coat: { this.state.coat }</p>
              <p>Country: { this.state.country }</p>
              <p>Origin: { this.state.origin }</p>
              <p>Pattern: { this.state.pattern }</p>
            </div>
          </div>
      </div>
    );
  }
}
