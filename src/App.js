import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Interact from './components/Interact';
import Chat from './components/Chat';



class App extends Component {
  constructor(){
    super();
    this.state= {
      peopleInSpace: 0,
      userInput: 0
    }
  }
  render() {
    return (
      <body>
      <div>
       

      <Header/>
        <h1 class="body">This is basically a guessing game.  How many astronauts are currently in space?</h1>
        <h1><Body/></h1>
        <h1><Interact/></h1>
        <h1><Chat/></h1>
       
      </div>
      </body>
      
    );
  }
}

export default App;
