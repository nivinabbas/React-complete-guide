import React from "react";

const person = props => {
  return (
    <div>
      {/* <p>I'm a Person i'm inside the arrow function</p> */}
      <h1>
        {" "}
        {props.name} {props.age}{" "}
      </h1>
    </div>
  );
};
export default person;
