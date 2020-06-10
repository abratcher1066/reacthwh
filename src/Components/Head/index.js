import React, { Component } from "react";
import "./Head.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <h1>Employee Directory</h1>
        </div>
        <div>
          <p>Start typing in the box to search, or click on the carrots* to filter by heading.</p>
        </div>
      </div>

    )
  }
}