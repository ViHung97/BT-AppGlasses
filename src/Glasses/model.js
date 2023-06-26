import React, { Component } from "react";

export default class Model extends Component {
  constructor() {
    super();
    this.img = "./glassesImage/model.jpg";
  }
  render() {
    return (
      <div>
        <img className="model" src={this.img} alt="Model" />
      </div>
    );
  }
}
