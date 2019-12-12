import React, { Component } from "react";
import { Col } from "antd";
import styled from "styled-components";
import { Transition, animated } from "react-spring/renderprops";

const About__Label = styled.div`
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-left: 40px;
`;
const About__Detail = styled.div`
  color: white;
  margin-left: 60px;
  margin-bottom: 20px;
`;

export class About extends Component {
  render() {
    const name = ["Choi Jong Sun(최종선)"];
    return (
      <Col
        span={8}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <About__Label>Name</About__Label>
        <About__Detail>Choi Jong Sun(최종선)</About__Detail>
    
        <About__Label>Age</About__Label>
        <About__Detail>28</About__Detail>

        <About__Label>Hobby</About__Label>
        <About__Detail>Cooking</About__Detail>
        
        <About__Label>Nationality</About__Label>
        <About__Detail>Korea</About__Detail>
      </Col>
    );
  }
}

export default About;
