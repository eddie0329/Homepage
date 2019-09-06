import React, { Component } from "react";
import { Button, Icon, Popover, Row, Col, Input } from "antd";

const content = (
  //layout
  <Row style={{ height: "400px", width: "300px" }}>
    <Col span={24}>
      <Input placeholder="User" />
    </Col>
    {/* chat */}
    <Row>
      <Col span={24}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            height: "300px",
            borderRadius: "10px 10px / 10px 10px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        ></div>
      </Col>
    </Row>

    {/* send and text */}
    <Row>
      <Col span={19}>
        <Input placeholder="Text" />
      </Col>
      <Col span={2}>
        <Button>Send</Button>
      </Col>
    </Row>
  </Row>
);

export class AffixDiaglog extends Component {
  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    return (
      <Popover
        placement="topRight"
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button
          type="primary"
          style={{
            float: "right",
            marginTop: "-90px",
            marginRight: "5%",
            fontSize: "20px"
          }}
        >
          <Icon type="message" theme="filled" />
        </Button>
      </Popover>
    );
  }
}

export default AffixDiaglog;
