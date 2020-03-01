import React, { Component } from "react";
// import "./css/Calculator.css";

class Calculator extends Component {
  state = {
    displayValue: 0,
    operator: null
  };

  handleNumClicks = e => {
    this.setState({
      displayValue:  e.target.value + this.state.displayValue 
    });
  };

  handleClearBtn = () => this.setState({ displayValue: ""});
  
  handleActiveOperator = e => this.setState({operator: e.target.value})

  render() {
    console.log(this.state)
    const { displayValue } = this.state;
    return (
      <div className="calculator">
        <div className="numbers">
          <div className="displayVal">
            <p>{displayValue}</p>
          </div>
          <div className="row">
            <button
              className="nan"
              name="currVal"
              value="AC"
              onClick={this.handleClearBtn}
            >
              AC
            </button>
            <button
              className="nan"
              name="currVal"
              value="+/-"
              onClick={this.handleNumConvert}
            >
              +/-
            </button>
            <button
              className="nan"
              name="currVal"
              value="%"
              onClick={this.handlePercentage}
            >
              %
            </button>
            <button
              className="operator"
              name="operator"
              value="÷"
              onClick={this.handleActiveOperator}
            >
              ÷
            </button>
          </div>
          <div className="row">
            <button
              className="number"
              name="currVal"
              value="7"
              onClick={this.handleNumClicks}
            >
              7
            </button>
            <button
              className="number"
              name="currVal"
              value="8"
              onClick={this.handleNumClicks}
            >
              8
            </button>
            <button
              className="number"
              name="currVal"
              value="9"
              onClick={this.handleNumClicks}
            >
              9
            </button>
            <button
              className="operator"
              name="operator"
              value="x"
              onClick={this.handleActiveOperator}
            >
              x
            </button>
          </div>
          <div className="row">
            <button
              className="number"
              name="currVal"
              value="4"
              onClick={this.handleNumClicks}
            >
              4
            </button>
            <button
              className="number"
              name="currVal"
              value="5"
              onClick={this.handleNumClicks}
            >
              5
            </button>
            <button
              className="number"
              name="currVal"
              value="6"
              onClick={this.handleNumClicks}
            >
              6
            </button>
            <button
              className="operator"
              name="operator"
              value="-"
              onClick={this.handleActiveOperator}
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              className="number"
              name="currVal"
              value="1"
              onClick={this.handleNumClicks}
            >
              1
            </button>
            <button
              className="number"
              name="currVal"
              value="2"
              onClick={this.handleNumClicks}
            >
              2
            </button>
            <button
              className="number"
              name="currVal"
              value="3"
              onClick={this.handleNumClicks}
            >
              3
            </button>
            <button
              className="operator"
              name="operator"
              value="+"
              onClick={this.handleActiveOperator}
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              className="number"
              name="currVal"
              value="0"
              onClick={this.handleNumClicks}
            >
              0
            </button>
            <button
              className="nan"
              name="currVal"
              value="."
              onClick={this.handleNumClicks}
            >
              .
            </button>
            <button
              className="operator"
              name="currVal"
              value="="
              onClick={this.handleResult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;