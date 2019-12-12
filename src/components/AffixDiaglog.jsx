import React, { Component } from "react";
import { Button, Icon, Popover, Row, Col, Input, Avatar } from "antd";
import uuid from "uuid";
import io from "socket.io-client";
import { connect } from "react-redux";
import { sendChats } from "../actions/index";

const textInput = React.createRef();
const userInput = React.createRef();

let chatDialog = [];
let chatSendFunction;

// connect with the socket
let socket = null;

const send = () => {
  let text = textInput.current.state.value;
  let user = userInput.current.state.value;

  if (user === undefined) {
    user = "Unknown User";
  }
  if (text === undefined) {
    text = "";
  }

  const chat = { from: user, msg: text };

  if (!socket) {
    socket = io("localhost:5000");
    socket.on("chat message", function(message) {
      chatSendFunction(message);
      console.log(message);
    });
  }
  socket.emit("chat message", chat);

  const textInput2 = document.getElementById("textInput");
  textInput2.value = "";
  textInput.current.state.value = "";
};

const content = chats => (
  <>
    {/* //layout */}
    <Row style={{ height: "400px", width: "300px" }}>
      <Row>
        <Col span={24}>
          <Input ref={userInput} placeholder="User" />
        </Col>
      </Row>
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
              paddingTop: "3px",
              paddingLeft: "3px",
              paddingRight: "3px",
              overflow: "auto"
            }}
          >
            {chats.map(chat => (
              <div style={{ marginBottom: "2px" }} key={uuid()}>
                <Avatar>{chat.from}</Avatar>
                {chat.msg}
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* send and text */}
      <Row>
        <Col span={19}>
          <Input ref={textInput} id="textInput" placeholder="Text" />
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={send}>
            Send
          </Button>
        </Col>
      </Row>
    </Row>
  </>
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
    chatDialog = this.props.chats;
    chatSendFunction = this.props.sendChats;
    return (
      <Popover
        placement="topRight"
        // content={content(this.props.chats)}
        content={"Not on Service"}
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

const mapStateToProps = state => {
  return {
    chats: state.chatReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendChats: value => {
      dispatch(sendChats(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AffixDiaglog);

// export default AffixDiaglog;
