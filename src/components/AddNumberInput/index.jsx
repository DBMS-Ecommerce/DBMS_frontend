import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

class GroupedButtons extends React.Component {
  // state = {
  //   initialQuantity: this.props.initialQuantity,
  // };
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({ counter: this.props.initialQuantity });
  }

  handleIncrement = () => {
    this.setState((state) => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState((state) => ({ counter: state.counter - 1 }));
  };
  render() {
    const displayCounter = this.state.counter > 1;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}

        <Button disabled>{this.state.counter}</Button>
        <Button onClick={this.handleIncrement}>+</Button>
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
