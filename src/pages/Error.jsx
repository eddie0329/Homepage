import React, { Component } from "react";
import BackGround from "../style/BackGround";
import { Col, message, Button, Icon } from "antd";
import { Link } from "react-router-dom";

export class Error extends Component {
  componentDidMount() {
    message.error("404 Page Not Found");
  }
  render() {
    return (
      <BackGround>
        <Col span={24}>
          <h1 style={{ textAlign: "center", color: "white" }}>
            404 Page Not Found
            <div>
              <Link to="/">
                <Icon type="left" />
                Go Home
              </Link>
            </div>
          </h1>
          <div style={{ marginLeft: "46%", marginRight: "auto" }}></div>
        </Col>
      </BackGround>
    );
  }
}

export default Error;
