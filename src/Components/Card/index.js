import React, { Component } from "react";
import "./Card.css";



export default class EmployeeCard extends Component {
  render() {
    return (
      <div>
        {this.props.user.name.first}
      </div>
      <div>
       { this.props.user.name.last }
      </div>
    )
  }
}


