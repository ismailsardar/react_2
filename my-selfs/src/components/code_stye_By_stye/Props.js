import React, { Component } from "react";

export default class Props extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ismile",
    };
  }

  handelChange() {
    this.setState({ name: "Sardar" }, () => console.log("Current value",this.state.name));
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.handelChange()}>Change Name</button>
      </div>
    );
  }
}
