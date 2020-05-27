import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fact: '',
        }
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const limit = 98;
    const url = `https://catfact.ninja/fact?max_length=${limit}`;
    const response = await fetch(url)
    const factData = await response.json();
    console.log(factData);
    
    this.setState({
      fact: factData.fact,
    })  

  }


  render() {
    return (
      <div>
        <h1>hi from facts</h1>
        <button onClick={this.handleClick}>Click me for a fact</button>
        <p>{ this.state.fact }</p>
      </div>
    )
  }
}
