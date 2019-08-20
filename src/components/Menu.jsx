import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MyMenu = styled(NavLink)`
  color: #fff;
  text-transform: uppercase;
  margin-left: 25px;
  text-weight: bold;
  :hover {
    text-decoration: line-through;
    color: #fff;
  }
`;

export class Menu extends Component {
  render() {
    const pathname = this.props.pathname;
    return (
      <div>
        <MyMenu
          exact
          to="/"
          style={
            pathname === "/"
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          Home
        </MyMenu>
        <MyMenu
          exact
          to="/portfolio"
          style={
            pathname === "/portfolio"
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          Portfolio
        </MyMenu>
        <MyMenu
          exact
          to="/contact"
          style={
            pathname === "/contact"
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          Contact
        </MyMenu>
      </div>
    );
  }
}

export default Menu;
