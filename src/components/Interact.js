import React, { Component } from 'react';
import '../reset.css';
import '../index.css';
import App from '../App';
import Header from './Header';
import Body from './Body';
import axios from 'axios';

class Interact extends Component {
    constructor() {
        super();
        this.state = {
            peopleInSpace: 1,
            userInput: "",
            guesses: [],
            insults: [' was a really stupid guess.', ' <---?!?! What were you thinking??', '?! Im embarrassed for you', ' *rolls eyes*', ' oh balls, thats an idiotic guess', ' maybe you should go back to diaper school']
        }
    }

    guessValidator(){
        let newGuess = this.state.guesses.slice();
        if(this.state.peopleInSpace !== this.state.userInput){
            newGuess.push(this.state.userInput);

        }else {
            alert(`You have guessed the correct number and you know what? I'm proud.`)
        }

        this.setState({
            guesses: newGuess,
            userInput: ""
            
        })
        
        
    }

    input(val){
        this.setState({
            userInput: +val
            
        })
    }

    insultGen(){
     let index = Math.floor(Math.random() * this.state.insults.length);
     return this.state.insults[index];

    }

    componentDidMount(){
        let promise = axios.get('http://api.open-notify.org/astros.json')
        promise.then(response => {
            this.setState({

                peopleInSpace: response.data.number
            })
        })
    }




    render(){

        let badGuess = this.state.guesses.map((e,i) => {
            return(
                <p key={i}>{e}{this.insultGen()}</p>
            )
        })
        return (
            <div>
            At this point, you are to guess how many people are up in space:
            <p><input value = {this.state.userInput} onChange = {event => this.input(event.target.value)}/></p>
            <p><button  onClick = {event => this.guessValidator(event.target.value)}>GUESS</button></p>
            <h1>Your Best Guess:</h1>
            <h2>{ badGuess }</h2>
            </div>
        )
    }
}

export default Interact;


// 