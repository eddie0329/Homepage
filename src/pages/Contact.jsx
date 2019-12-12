import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import styled from "styled-components";
import AffixDiaglog from "../components/AffixDiaglog";
import { Spring } from "react-spring/renderprops";

const Contents = styled(Row).attrs(() => ({ type: "flex" }))`
  margin-top: 10px;
  background-color: #f3f7f820;
  margin-left: auto;
  margin-right: auto;
  width: 135vh;
  height: 65vh;
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
        style={{ background: "#0a262e", height: "100vh" }}
      >
        <Col span={24} style={{ textAlign: "center" }}>
          <Logo />
          <Menu pathname={pathname} />
        </Col>
        <Contents>
          <Col span={24}>
            <Spring
              config={{ tension: 2 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => <Contact__Label style={props}>Email</Contact__Label>}
            </Spring>
            <Spring
              config={{ tension: 9 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <Contact__Detail style={props}>
                  fdsa0329@naver.com
                </Contact__Detail>
              )}
            </Spring>

            <Spring
              config={{ tension: 5 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <Contact__Label style={props}>KaKao Talk</Contact__Label>
              )}
            </Spring>
            <Spring
              config={{ tension: 3 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <Contact__Detail style={props}>
                  songzzang-_-92@hotmail.com
                </Contact__Detail>
              )}
            </Spring>

            <Spring
              config={{ tension: 15 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <Contact__Label style={props}>Direct Chat</Contact__Label>
              )}
            </Spring>
            <Spring
              config={{ tension: 7 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <Contact__Detail style={props}>below chat icon</Contact__Detail>
              )}
            </Spring>
          </Col>
        </Contents>
        <Col span={24}>
          <Footer style={{ textAlign: "center", background: "#0a262e" }}>
            ©Copyrigt ~2019 Eddie Sunny Powered by React, and Ant Design.
          </Footer>
          <AffixDiaglog />
        </Col>
      </Row>
    );
  }
}

export default Contact;
