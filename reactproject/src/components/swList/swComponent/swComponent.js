import React from "react";
import "./swComponent.css";
import { Player, ControlBar, PlayToggle } from "video-react";

class SwComponent extends React.Component {
  state = {
    name: this.props.name,
   
  };
  render() {
    const { name } = this.state;
    return (
      <div onClick={this.props.GetPerson} className="card">
        <div className="component">
          <ul>
            <li>{name}</li>
          </ul>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  }
}
export default SwComponent;
