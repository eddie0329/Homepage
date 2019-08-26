import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import styled from "styled-components";
import Money from "../components/Portfolios/Money vs Happiness among marriage/MoneyCover ";
import BookShelf from "../images/BookShelf2.png";
import SeoulRouteMaker from "../components/Portfolios/SeoulRouteMaker/SeoulRouteMaker";
import Education from "../components/Portfolios/Education/EducationCover";
import Saving from "../components/Portfolios/Saving/SavingCover";
import Loading from "../components/Loading";

const { Footer } = Layout;

const Contents = styled(Row).attrs(() => ({ type: "flex" }))`
  margin-top: 10px;
  background-color: #f3f7f820;
  margin-left: auto;
  margin-right: auto;
  width: 135vh;
  height: 65vh;
  overflow-x: scroll;
  overflow-y: auto;
`;

export class Portfolio extends Component {
  state = {
    loading: true,
  }
  async componentDidMount() {
    await setTimeout(() => {
      this.setState({ loading: false });
      console.log(this.state.loading);
    }, 2000);
  }
  render() {
    const pathname = this.props.location.pathname;
    if (this.state.loading === true) {
      return <Loading/>;
    }
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
          {/* Row1 */}
          <Row type="flex">
            <Col span={12}>
              <SeoulRouteMaker />
            </Col>
            <Col span={12}>
              <Money />
            </Col>
            <Row
              type="flex"
              align="top"
              style={{
                width: "1400px",
                height: "0px"
              }}
            >
              <Col span={24}>
                <img
                  src={BookShelf}
                  style={{
                    width: "98%",
                    height: "30px",
                    marginTop: "48.9px"
                  }}
                />
              </Col>
            </Row>
          </Row>
          {/* End of Row1 */}

          {/* Row2 */}
          <Row type="flex">
            <Col span={12}>
              <Education />
            </Col>
            <Col span={12}>
              <Saving />
            </Col>
            <Row
              type="flex"
              align="top"
              style={{
                width: "1400px",
                height: "0px"
              }}
            >
              <Col span={24}>
                <img
                  src={BookShelf}
                  style={{
                    width: "98%",
                    height: "30px",
                    marginTop: "48.9px"
                  }}
                />
              </Col>
            </Row>
          </Row>
          {/* End of Row2 */}
        </Contents>
        <Col span={24}>
          <Footer style={{ textAlign: "center", background: "#0a262e" }}>
            ©Copyrigt ~2019 Eddie Sunny Powered by React, and Ant Design.
          </Footer>
        </Col>
      </Row>
    );
  }
}

export default Portfolio;
