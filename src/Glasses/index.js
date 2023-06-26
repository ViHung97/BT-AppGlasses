import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json"

export default class TryGlasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentGlasses: [{
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      }],
    };
  }

  currentGlasses=(id, url)=>{
    console.log(id, url)
    let CurrentGlasses = [...this.state.CurrentGlasses]
    if (CurrentGlasses.id === id) {
      CurrentGlasses.url = url
    }
    this.setState({
      CurrentGlasses
    })
  }

  renderListGalasses=()=>{
    const listGlasses = dataGlasses
    console.log(listGlasses)
    return listGlasses.map((item)=>{
      return <img onClick={()=>{this.currentGlasses(item.id, item.url)}} key={item.id} src={item.url} alt="" />
    })
  }
  

  render() {
    return (
      <div className="app">

        <div>
          <h1 className="title">TRY GLASSES APP ONLINE</h1>
        </div>
        <div>
          <div className="content d-flex justify-content-around">
            <img className="model" src="./glassesImage/model.jpg" alt="" />
            <img className="model" src="./glassesImage/model.jpg" alt="" />
          </div>
          <img className="currentGlasses" src="./glassesImage/v1.png" alt="" />
        </div>
        <div className="listGlasses">
          {this.renderListGalasses()}
        </div>
      </div>
    );
  }
}
