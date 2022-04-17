import React from "react";
import { render } from "react-dom";
import Checkbox from "./Checkbox";

export class App extends React.Component {
  state = { checked: false };

  handleCheckboxChange = (event) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div style={{ fontFamily: "system-ui" }}>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span style={{ marginLeft: 8 }}>Label Text</span>
        </label>
      </div>
    );
  }
}
