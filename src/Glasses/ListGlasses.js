import React, { Component } from "react";
import Glasses from "./glasses";

export default class ListGlasses extends Component {
  renderListGalasses = () => {
    const { listGlasses } = this.props;
    return listGlasses.map((glasses)=>{
      console.log(glasses)
      return <Glasses key={glasses.id} glasses={glasses}/>
    })
  };
  render() {
    return <div>{this.renderListGalasses()}</div>;
  }
}
