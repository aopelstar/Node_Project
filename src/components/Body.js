import React, { Component } from 'react';
import '../reset.css';
import '../index.css';
import App from '../App';
import Header from './Header';
import Interact from './Interact';

class Body extends Component {
    render(){
        return (
            <div>
                <h1><iframe width="100%" height="500px" src="https://www.youtube.com/embed/N-MgRkSh5Xk" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></h1>
                </div>
        )
    }

}

export default Body;