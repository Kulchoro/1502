import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    darkMode: false,
    title: "Hello World!",
    titleName: "Hello World!",
    numberX: "0",
    numberY: "",
    a: "0",
    b: "",
    d: "",
    rectangleA: "",
    rectangleB: "",
    triangleA: "",
    triangleB: "",
    cubeWidth: "",
    cubeLengh: "",
    cubeHeight: "",
    pi: "3.14",
    area: "",
    height: ""
  };

  render() {
    let style = {};
    let a = this.state.a;
    let b = this.state.b;
    let d = this.state.d;
    let title = this.state.title;
    let name = this.state.titleName;
    let numberX = this.state.numberX;
    let numberY = this.state.numberY;
    let rectangleA = this.state.rectangleA;
    let rectangleB = this.state.rectangleB;
    let triangleA = this.state.triangleA;
    let triangleB = this.state.triangleB;
    let cubeWidth = this.state.cubeWidth;
    let cubeLengh = this.state.cubeLengh;
    let cubeHeight = this.state.cubeHeight;
    const pi = this.state.pi;
    let area = this.state.area;
    let height = this.state.height;

    if (this.state.darkMode) {
      style = {
        height: "100vh",
        color: "white",
        background: "darkgrey"
      };
    }

    return (
      <div className="App" style={style}>
        <input
          type="checkbox"
          onChange={event => {
            this.setState({
              darkMode: event.target.checked
            });
          }}
        />{" "}
        Dark mode
        <h1>{this.state.title}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={event => {
            this.setState({
              title: event.target.value
            });
          }}
        />
        <h1>My name is {this.state.titleName}</h1>
        <input
          type="text"
          value={this.state.titleName}
          onChange={event => {
            this.setState({
              titleName: event.target.value
            });
          }}
        />
        <h1>
          Title is {title} and name is {name}
        </h1>
        <input
          type="number"
          onChange={event => {
            this.setState({ numberX: +event.target.value });
          }}
        />
        <input
          type="number"
          onChange={event => {
            this.setState({ numberY: +event.target.value });
          }}
        />
        <h1>{numberX + numberY}</h1>
        <input
          type="number"
          onChange={event => {
            this.setState({ a: +event.target.value });
          }}
        />
        <input
          type="number"
          onChange={event => {
            this.setState({ b: +event.target.value });
          }}
        />
        <input
          type="number"
          onChange={event => {
            this.setState({ d: +event.target.value });
          }}
        />
        <h1>{a + b + d}</h1>
        <hr />
        <h1>Home Work 15-feb</h1>
        <h4>Rectangle</h4> Width:
        <input
          type="number"
          onChange={event => {
            this.setState({ rectangleA: +event.target.value });
          }}
        />
        Length:
        <input
          type="number"
          onChange={event => {
            this.setState({ rectangleB: +event.target.value });
          }}
        />
        <h3>{rectangleA * rectangleB}</h3>
        <hr />
        <h4>Triangle</h4> Width:
        <input
          type="number"
          onChange={event => {
            this.setState({ triangleA: +event.target.value });
          }}
        />
        Length:
        <input
          type="number"
          onChange={event => {
            this.setState({ triangleB: +event.target.value });
          }}
        />
        <h3>{(triangleA * triangleB) / 2}</h3>
        <hr />
        <h4>Cube area</h4> Width:
        <input
          type="number"
          onChange={event => {
            this.setState({ cubeWidth: +event.target.value });
          }}
        />
        Length:{" "}
        <input
          type="number"
          onChange={event => {
            this.setState({ cubeLengh: +event.target.value });
          }}
        />
        Height:
        <input
          type="number"
          onChange={event => {
            this.setState({ cubeHeight: +event.target.value });
          }}
        />
        <h3>{cubeWidth * cubeLengh * cubeHeight}</h3>
        <hr />
        <h4>Cylinder volume</h4>
        Pi:
        <input
          type="number"
          value="3.14"
          onChange={event => {
            this.setState({ pi: +event.target.value });
          }}
        />
        Area:
        <input
          type="number"
          value={this.state.area}
          onChange={event => {
            this.setState({ area: +event.target.value });
          }}
        />
        Height:
        <input
          type="number"
          value={this.state.height}
          onChange={event => {
            this.setState({ height: +event.target.value });
          }}
        />
        <h4>{pi * (area ^ 2) * height}</h4>
      </div>
    );
  }
}

export default App;
