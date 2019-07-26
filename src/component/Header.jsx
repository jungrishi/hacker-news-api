import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <h1>
          <Link to="/">Hacker News</Link>
        </h1>
        <div className="pagination">
          <i
            className="fa fa-angle-left"
            onClick={() => this.props.handlePage("Prev")}
          />
          <span>{this.props.currentPage}/</span>
          <span>{this.props.totalPage}</span>
          <i
            className="fa fa-angle-right"
            onClick={() => this.props.handlePage("Next")}
          />
        </div>
      </div>
    );
  }
}
