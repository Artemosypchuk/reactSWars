import React from "react";
import { Fragment } from "react";
import SwComponent from "./swComponent/swComponent";

const SwList = ({ People, GetPerson, NextPage, getRep }) => {
  let i = 1;

  const listItem = People.map(item => {
    return (
      <SwComponent
        name={item.name}
        key={i++}
        GetPerson={() => GetPerson(item.name)}
      ></SwComponent>
    );
  });

  return (
    <Fragment>
      {listItem}

      <span className="col-12">
        <div className="btn-group " role="group" aria-label="First group">
          <button
            onClick={NextPage}
            value=" "
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            1
          </button>
          <button
            onClick={NextPage}
            value="/?page=2"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            2
          </button>
          <button
            onClick={NextPage}
            value="/?page=3"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            3
          </button>
          <button
            onClick={NextPage}
            value="/?page=4"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            4
          </button>
          <button
            onClick={NextPage}
            value="/?page=5"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            5
          </button>
          <button
            onClick={NextPage}
            value="/?page=6"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            6
          </button>
          <button
            onClick={NextPage}
            value="/?page=7"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            7
          </button>
          <button
            onClick={NextPage}
            value="/?page=8"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            8
          </button>
          <button
            onClick={NextPage}
            value="/?page=9"
            type="button"
            className="btn btn-secondary"
            data-toggle="button"
            aria-pressed="false"
            autoComplete="off"
          >
            9
          </button>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Вибрати розділ
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button
                className="dropdown-item"
                onClick={getRep}
                value="characters"
                href="#"
              >
                Персонажі
              </button>
              <button
                className="dropdown-item"
                onClick={getRep}
                value="planets"
                href="#"
              >
                Планети
              </button>
              <button
                className="dropdown-item"
                onClick={getRep}
                value="starships"
                href="#"
              >
                Кораблі
              </button>
            </div>
          </div>
        </div>
      </span>
    </Fragment>
  );
};
export default SwList;
