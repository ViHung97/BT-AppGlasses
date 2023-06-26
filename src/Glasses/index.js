import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class TryGlasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGlasses: [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "./glassesImage/v1.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      ],
    };
  }

  currentGlasses = (item) => {
    return this.setState({
      currentGlasses: item,
    });
  };

  renderListGalasses = () => {
    const listGlasses = dataGlasses;
    return listGlasses.map((item) => {
      return (
        <img
          onClick={() => {
            this.currentGlasses(item);
          }}
          key={item.id}
          src={item.url}
          alt=""
        />
      );
    });
  };

  render() {
    const { currentGlasses } = this.state;
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
          <img className="currentGlasses" src={currentGlasses.url} alt="" />
        </div>
        <div className="listGlasses">{this.renderListGalasses()}</div>
      </div>
    );
  }
}
