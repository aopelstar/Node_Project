import React, { Component } from 'react';
import '../reset.css';
import '../index.css';
import App from '../App';
import Header from './Header';
import Interact from './Interact';
import axios from 'axios';

class Chat extends Component {
    constructor() {
        super();
        this.state= {
            people: [],
            astronaut: "",
            text: ""
        }

    }

    handleChage(val){
        this.setState({
            astronaut: val
        })
    }

    handleChange(val){
        this.setState({
            text: val
        })
    }

    componentDidMount(){
        let promise = axios.get('http://api.open-notify.org/astros.json')
        promise.then(response => {
            this.setState({

                people: response.data.people
            })
            
        }) 
    }

    post(){
        let body = {
            astronaut: this.state.astronaut,
            message: this.state.text
        }
        let promise = axios.post("/api/task" )
    }



    render(){
        let newPeople = this.state.people.map((e,i) => {
            return(
                <option value={ e.name } key={i}>{ e.name }</option>
            )
        })
        
        return(
            <div>
                <div class = "pipe"><h3>GREAT BALLS OF FIRE YOU CAN EMAIL THE ASTRONAUTS</h3>
                </div>
                
                <select onChange = {(event) => this.handleChage(event.target.value)}>
                    <option>Choose ur astronaut</option>
                    {newPeople}
                </select>
                <div>
                    <textarea rows ="8" cols="200" onChange = { (event) => this.handleChange(event.target.value)}>
                    </textarea>
                </div>
                <button onClick = { (event) => this.post()}>Send</button>
            </div>
        )
    }
}
export default  Chat;