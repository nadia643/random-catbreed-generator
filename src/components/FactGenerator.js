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
    // limit is 140 according to API
    const limit = 98;
    const url = `https://catfact.ninja/fact?max_length=${limit}`;
    const response = await fetch(url)
    const factData = await response.json();    

    this.setState({
      fact: factData.fact,
    })  
    console.log(factData);
    

  }


  render() {
    return (
      <div className="fact-generator">
        <button className="fact-button" onClick={this.handleClick}>Click me for a fact</button>
        <p>{ this.state.fact }</p> <br /> <br /> <br /> <br />
        <h4>"Oooooh, what an interesting fact. I have learnt so much" - Holly, Michigan</h4>
      </div>
    )
  }
}
