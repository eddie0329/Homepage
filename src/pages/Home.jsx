import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import styled from "styled-components";
import MyTag from "../components/MyTag";
import PhotoView from "../components/ProfileImage";
import About from "../components/About";

const { Footer } = Layout;

const Contents = styled(Row).attrs(() => ({ type: "flex" }))`
  margin-top: 1px;
  background-color: #f3f7f820;
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
  height: 700px;
`;

export class Home extends Component {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <Row
        type="flex"
        align="middle"
        style={{ background: "#0a262e", height: "1120px" }}
      >
        <Col span={24} style={{ textAlign: "center" }}>
          <Logo />
          <Menu pathname={pathname} />
        </Col>
        <Contents>
          <MyTag />
          <PhotoView />
          <About />
        </Contents>
        <Col span={24}>
          <Footer style={{ textAlign: "center", background: "#0a262e" }}>
            Eddie Sunny Design ©2019 Created by Eddie Sunny
          </Footer>
        </Col>
      </Row>
    );
  }
}

export default Home;
