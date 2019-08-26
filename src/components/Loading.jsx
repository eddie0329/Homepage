import React, { Component } from "react";
import "./LoadingStyle.css";
import { Col } from "antd";
import BackGround from "../style/BackGround";

export class Loading extends Component {
  render() {
    return (
      <BackGround>
        <Col span={24}>
          <div className="Loading_container">
            <div className="Loading_circle">
              <div />
              <div />
              <div />
            </div>
          </div>
        </Col>
      </BackGround>
    );
  }
}

export default Loading;
