import React, { Component } from 'react';
import './App.css';
import UserInput from "./Routes/UserInput"
import UserOutput from "./Routes/UserOutput"

class App extends Component {
    state = {
      input: [
        {name:"", age:"", coolFact:""}
      ]
    }

    handleChange = (event) => {
      this.setState ({
        person: [
          {name: event.target.value, age: event.target.value}
        ]
      })
    }


  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
          <UserInput changed={this.handleChange}/>
          <UserOutput />
          <UserOutput />
          <UserOutput />
      </div>
    );
  }
}

export default App;
