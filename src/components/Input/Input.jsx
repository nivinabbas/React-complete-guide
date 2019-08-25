import React, { Component } from "react";

class Input extends Component {
  state = {
    username: ""
  };

  onUsernameChange = e => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };

  //send user name to server
  render() {
    return (
      <div>
        <input
          type="text"
          placeholer="username"
          value={this.state.username}
          onChange={this.onUsernameChange}
        />
        <button onClick={() => this.props.nivin(this.state.username)}>
          Change
        </button>
      </div>
    );
  }
}

export default Input;
