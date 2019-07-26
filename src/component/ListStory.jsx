import React from "react";
import { withRouter, Link } from "react-router-dom";

import withFetchData from "./withFetchData";

function ListStory(props) {
  return (
    <>
      {props.passState.map(list => (
        <li key={list.id}>
          <Link
            to={{
              pathname: `/stories/${list.id}`,
              state: { data: list }
            }}>
            {list.title}
          </Link>
        </li>
      ))}
    </>
  );
}

export default withFetchData(withRouter(ListStory), "topstories.json");
