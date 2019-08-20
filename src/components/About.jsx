import React, { Component } from "react";
import { Col } from "antd";

export class About extends Component {
  render() {
    return (
      <Col span={8}>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            marginLeft: "40px",
            marginTop: "190px"
          }}
        >
          Name
        </div>
        <div
          style={{ color: "white", marginLeft: "60px", marginBottom: "20px" }}
        >
          Choi Jong Sun(최종선)
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            marginLeft: "40px"
          }}
        >
          Age
        </div>
        <div
          style={{ color: "white", marginLeft: "60px", marginBottom: "20px" }}
        >
          28
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            marginLeft: "40px"
          }}
        >
          Hobby
        </div>
        <div
          style={{ color: "white", marginLeft: "60px", marginBottom: "20px" }}
        >
          Cooking
        </div>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            marginLeft: "40px"
          }}
        >
          Nationality
        </div>
        <div
          style={{ color: "white", marginLeft: "60px", marginBottom: "20px" }}
        >
          Korea
        </div>
      </Col>
    );
  }
}

export default About;
