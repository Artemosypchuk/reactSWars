import React from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import ReactDOM from "react-dom";
import "./index.css";
import Waiting from "./components/waiting/waiting";
import { Fragment } from "react";
import SwList from "./components/swList/swList";
import SwComponentVideo from "./components/swList/swComponent/swComponentVideo";
import Main from "./components/Main/Main";

class App extends React.Component {
  state = {
    responsed: true,
    people: [],
    persona: [],
    imgUrl: 1,
    mainWindow: false
  };

  async componentDidMount() {
    let url = `https://swapi.co/api/people`;
    // ;
    const response = await fetch(url);
    const people = await response.json();

    // .then()
    // const response2 = await fetch(url2)
    // const imges = await response2.json()
    // console.log(imges)

    this.setState({
      people: people.results
    });
    console.log(this.state.people);
  }
  GetResponse = () => {
    this.setState({
      responsed: false
    });
  };
  GetPerson = name => {
    const index = this.state.people.findIndex(elem => elem.name === name);
    this.setState({
      imgUrl: index + 1
    });
    let arr = [];
    arr = [...arr, this.state.people[index]];
    this.setState({
      mainWindow: true,
      persona: arr
    });
  };
  GetWindow = () => {
    this.setState({
      mainWindow: false
    });
  };
  render() {
    console.log(this.state.imgUrl);
    return (
      <Fragment>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1300}
        >
          <div className="col d-flex people">
            {this.state.responsed ? (
              <Waiting GetResponse={this.GetResponse} />
            ) : (
              <SwList
                People={this.state.people}
                GetPerson={this.GetPerson}
              ></SwList>
            )}
          </div>
          {this.state.mainWindow ? (<CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1300}
        >
            <Main
              imgUrl={this.state.imgUrl}
              Props={this.state.persona}
              GetWindow={this.GetWindow}
            ></Main></CSSTransitionGroup>
          ) : (
            <div></div>
          )}
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
