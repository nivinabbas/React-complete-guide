import React, { useState } from "react";
import Person from "../components/Persons/Person/Person";
import "./App.css";
import Input from "../Input/Input";
import IncrementCounter from "../IncrementCounter";
import DecrementCounter from "../DecrementCounter";
const app = props => {
  // personState = this.state
  //new state = this.setState();
  const [personState, setState] = useState({
    persons: [
      { name: "max", age: 28 },
      { name: "manu", age: 29 },
      { name: "stepahne", age: 26 }
    ],
    personHandler: false
  });
  //username: "",
  //counter: 0

  // onInputChanged = username => {
  //   // console.log("clicked from child");
  //   this.setState({ username });
  // };

  // incrementCounter = () => {
  //   let value = this.state.counter + 1;
  //   this.setState({ counter: value });
  // };
  // decrement = () => {

  //   if (this.state.counter > 0){
  //     let values = this.state.counter - 1;
  //    this.setState({ counter: values });
  //    }
  // };

  // const switchNameHandler = () => {
  //   NewState({
  //     persons: [
  //       { name: "maxmalian", age: 28 },
  //       { name: "manu", age: 29 },
  //       { name: "stepahne", age: 27 }
  //     ]
  //   });
  // };
  const toggleHandler = () => {
    const showPerson = personState.personHandler;
    console.log("inside toggle Handler before change", personState);

    setState({ persons: personState.persons, personHandler: !showPerson });
    {
      console.log("inside toggle Handler after change", personState);
    }
    //this.setState(NewState.personHandler:!showPerson);
  };

  return (
    <div className="App">
      <h1> This is our first app react</h1>
      {/* <h1>Counter : {this.state.counter}</h1>
        <IncrementCounter onIncrement={this.incrementCounter} />
        <DecrementCounter decrement={this.decrement} /> */}
      <button onClick={toggleHandler}>Toggle</button>
      {console.log("inside return after change", personState)}
      {personState.personHandler ? (
        <div>
          <Persons
            name={personState.persons[0].name}
            age={personState.persons[0].age}
          />
          <Persons
            name={personState.persons[1].name}
            age={personState.persons[1].age}
          />
          <Persons
            name={personState.persons[2].name}
            age={personState.persons[2].age}
          />
          {/* <h1>{this.state.username}</h1> */}
          {/* <Input nivin={this.onInputChanged} /> */}
        </div>
      ) : null}
    </div>
  );
};

export default app;
