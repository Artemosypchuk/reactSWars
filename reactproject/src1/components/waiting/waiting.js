import React from "react";

import "./waiting.css";

export default props => (
  
  <div className="App col-12">
    <h2>ARE YOU READY?</h2>
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h3 onClick={props.GetResponse}>READY</h3>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
