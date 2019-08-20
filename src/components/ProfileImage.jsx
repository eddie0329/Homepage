import React, { Component } from "react";
import styled from "styled-components";
import { Col, Carousel } from "antd";
import Photo1 from "../images/Photo1.jpg";
import Photo2 from "../images/Photo2.jpg";
import Photo3 from "../images/Photo3.jpg";
import Photo4 from "../images/Photo4.jpg";
import Photo5 from "../images/Photo5.jpg";

const MyImage = styled.img`
    width: 100%;
    height: 500px;
    border-radius: 50%;
`;


export class ProfileImage extends Component {
  render() {
    return (
      <Col
        span={8}
        style={{
          margin: "auto",
        }}
      >
        <Carousel autoplay style={{ background: "black" }}>
          <div>
            <MyImage src={Photo4}/>
          </div>
          <div>
            <MyImage src={Photo5}/>
          </div>
          <div>
            <MyImage src={Photo3}/>
          </div>
          <div>
            <MyImage src={Photo1}/>
          </div>
        </Carousel>
      </Col>
    );
  }
}

export default ProfileImage;
