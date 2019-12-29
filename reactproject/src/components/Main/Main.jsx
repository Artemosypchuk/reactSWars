import React from "react";
import "./Main.css";
export default props => (
  console.log(props),
  (
    <div className="jumbotron jumbotron-fluid">
      <button
        onClick={props.GetWindow}
        type="button"
        className="close"
        aria-label="Close"
      >
        <span className="closed" aria-hidden="true">
          &times;
        </span>
      </button>
      <div className="row container">
        <h1 className="display-1 col-12">{props.Props[0].name}</h1>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.imgUrl}.jpg`}
          alt=""
        />
        <div className='col-6 about'>
          <p>Gender: {props.Props[0].gender}</p>
          <p>height: {props.Props[0].height}</p>
          <p>mass: {props.Props[0].mass}</p>
          <p>hair_color: {props.Props[0].hair_color}</p>
          <p>eye_color: {props.Props[0].eye_color}</p>
          <p>birth_year: {props.Props[0].birth_year}</p>
          <p>skin_color: {props.Props[0].skin_color}</p>
        </div>
      </div>
    </div>
  )
);
