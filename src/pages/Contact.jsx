import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import styled from "styled-components";

const Contents = styled(Row).attrs(() => ({ type: "flex" }))`
  margin-top: 1px;
  background-color: #f3f7f820;
  margin-left: auto;
  margin-right: auto;
  width: 1400px;
  height: 700px;
`;

const Contact__Label = styled.div`
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-left: 40px;
`;
const Contact__Detail = styled.div`
  color: white;
  margin-left: 60px;
  margin-bottom: 20px;
`;

const { Footer } = Layout;
export class Contact extends Component {
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
          <Col span={24}>
            <Contact__Label>Email</Contact__Label>

            <Contact__Detail>fdsa0329@naver.com</Contact__Detail>

            <Contact__Label>KaKao Talk</Contact__Label>

            <Contact__Detail>songzzang-_-92@hotmail.com</Contact__Detail>
          </Col>
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

export default Contact;
