import React, { Component } from 'react'

export default class Picture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const response = await fetch(url);
    const pictureData = await response.json();

    this.setState({
      photo: pictureData[0].url,
    })
    console.log(pictureData[0].url);
    
  }

  render() {
    return (
      <div class="cat-page">
        <button onClick={this.handleClick}>Click me</button>
        <img src={this.state.photo} alt=" " class="cat-photo" />
      </div>
    )
  }
}
