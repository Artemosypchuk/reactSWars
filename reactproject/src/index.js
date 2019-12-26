import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Waiting from "./waiting";





class App extends React.Component {

state = {
    responseed: false
}

componentDidMount=()=>{
    let url = `swapi.co`
    fetch(url)
}
  render() {


    return <Waiting />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
