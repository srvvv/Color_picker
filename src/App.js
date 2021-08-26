import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
  }
  //This is the red function
  handelRed = () => {
    this.setState({
      red: event.target.value
    });
  };
  //This is the blue function
  handelBlue = () => {
    this.setState({
      blue: event.target.value
    });
  };
  //This is the green function
  handelGreen = () => {
    this.setState({
      green: event.target.value
    });
  };
  //This is the render function
  render() {
    return (
      <div
        style={{
          backgroundColor:
            "rgb(" +
            this.state.red +
            ", " +
            this.state.green +
            ", " +
            this.state.blue +
            ")",
          height: "100vh"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            width: 200,
            margin: 10,
            borderRadius: 10
          }}
        >
          <h3>Color pickers</h3>
          Red:
          <input
            type="range"
            value={this.state.red}
            onChange={this.handelRed}
          />
          <br />
          Blue:
          <input
            type="range"
            value={this.state.blue}
            onChange={this.handelBlue}
          />
          <br />
          Green:
          <input
            type="range"
            value={this.state.green}
            onChange={this.handelGreen}
          />
          <br />
        </div>
      </div>
    );
  }
}
