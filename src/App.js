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
    cubeHeight: ""
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
        Rectangle
        <input
          type="number"
          onChange={event => {
            this.setState({ rectangleA: +event.target.value });
          }}
        />
        <input
          type="number"
          onChange={event => {
            this.setState({ rectangleB: +event.target.value });
          }}
        />
        <h3>{rectangleA * rectangleB}</h3>
        Triangle
        <input
          type="number"
          onChange={event => {
            this.setState({ triangleA: +event.target.value });
          }}
        />
        <input
          type="number"
          onChange={event => {
            this.setState({ triangleB: +event.target.value });
          }}
        />
        <h1>{(triangleA * triangleB) / 2}</h1>
        Cube area
        <input
          type="number"
          onChange={event => {
            this.setState({ cubeWidth: +event.target.value });
          }}
        />
        <input
          type="number"
          onChange={event => {
            this.setState({ cubeLengh: +event.target.value });
          }}
        />
        <input
          type="number"
          onChange={event => {
            this.setState({ cubeHeight: +event.target.value });
          }}
        />
        <h3>{cubeWidth * cubeLengh * cubeHeight}</h3>
      </div>
    );
  }
}

export default App;
