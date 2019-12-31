import React from "react";
// import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
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
    Repos : 'planets',
    mainWindow: false,
    isDisabled: false
  };
  getRep = event => {
    console.log(event.target.value)
    this.state.people = [];
    this.setState({
      Repos: event.target.value,
      mainWindow: false
    })
  }
  NextPage = event => {
    let url = `https://swapi.co/api/${this.state.Repos}${event.target.value}`;
    console.log(event.target.disabled)
    this.setState({
      isDisabled:!this.state.isDisabled
    })

    fetch(url)
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        console.log(data.next)
        let NewList = [];
        let oldList = this.state.people.slice();
        NewList = oldList.concat(data.results) 
console.log(NewList)
        this.setState({
          people: NewList
        });
      });
      console.log(this.state.people)
  };
  async componentWillMount() {
    if (this.state.Repos === 'characters') {
      this.state.Repos = 'people'
    }
    let url = `https://swapi.co/api/${this.state.Repos}`;
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
    
    return (
      <Fragment>
        <div className="d-flex col people">
          {this.state.responsed ? (
            <Waiting GetResponse={this.GetResponse} />
          ) : (
            <SwList
              People={this.state.people}
              GetPerson={this.GetPerson}
                NextPage={this.NextPage}
                getRep={this.getRep}
                isDisabled={this.state.isDisabled}
            ></SwList>
          )}
        </div>

        {this.state.mainWindow ?  (
          <Main
            Repos={this.state.Repos}
            imgUrl={this.state.imgUrl}
            Props={this.state.persona}
            GetWindow={this.GetWindow}
          ></Main>
        ) : (
          <div></div>
        )}
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
