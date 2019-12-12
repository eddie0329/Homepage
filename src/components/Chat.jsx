import React, { Component } from "react";
import { Row, Col, Input, Button } from "antd";
import io from "socket.io-client";

export class Chat extends Component {
  socket = null;
  textInput = React.createRef();

  componentDidMount() {
    this.socket = io("http://localhost:5000");
  }
  send = () => {
    const text = this.textInput.current.state.value;
    // send message to server
    this.socket.emit("chat message", text);

    this.socket.on("chat message", function(msg) {
      // Create a <li> node
      let node = document.createElement("li");
      // Create a text node
      let textnode = document.createTextNode(msg);
      // Append the text to <li>
      node.appendChild(textnode);
      // Append <li> to <ul> with id="message"
      document.getElementById("message").appendChild(textnode);
      console.log(msg);
    });
  };
  render() {
    return (
      <Row style={{ height: "500px", width: "210px" }}>
        <Col span={24}>
          <Input placeholder="User" />
        </Col>
        {/* chat */}
        <Row>
          <Col span={24}>
            <div
              style={{
                border: "1px solid #d9d9d9",
                height: "75vh",
                borderRadius: "10px 10px / 10px 10px",
                marginTop: "10px",
                marginBottom: "10px",
                overflow: "auto"
              }}
            >
              <ul id="message"></ul>
            </div>
          </Col>
        </Row>

        {/* send and text */}
        <Row>
          <Col span={24}>
            <Input ref={this.textInput} placeholder="Text" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button
              type="primary"
              style={{ marginTop: "5px", float: "right" }}
              onClick={this.send}
            >
              Send
            </Button>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Chat;
