import React, { Component } from 'react';
import Banana from '../images/banan.jpg';
import Lemon from '../images/lemon.jpg' ;
import Lime from '../images/lime.jpg';
import Orange from '../images/orange.jpg';

class RandomFruit extends Component {
    constructor() {
        super();
        this.state= {
            images: [
            <img src={Banana} alt="banana" />,
            <img src={Lemon} alt="Lemon" />,
            <img src={Lime} alt="lime" />,
            <img src={Orange} alt="orange" />  
            ],
            idx:0
      };
    }

    

    handleNextFruit = () => {
        this.setState({
            idx: this.state.idx + 1
        });
    };

    render() {
        return (
            <div>
                <img 
                    // style = {{
                    //     width: 100,
                    //     height: 100
                    // }}
                    src={this.state.images}
                    alt="fruittt" 
                />
                <button onClick={this.handleNextFruit}>Give me more fruit, baby</button>
            </div>
        )
    }
}

export default RandomFruit;