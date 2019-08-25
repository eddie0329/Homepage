import React, { Component } from "react";
import { Modal, Button } from "antd";
import MoneyContent from "./MoneyContent";
import "./MoneyCoverStyle.css";

export class MoneyCover extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Dosis&display=swap');
        </style>
        <div className="MoneyCover__MyBook">
          {/* edge */}
          <div
            style={{
              position: "absolute",
              width: "25px",
              height: "330px",
              background: "#c48d8d"
            }}
          />

          {/* more button */}
          <Button
            onClick={() => this.setModal2Visible(true)}
            style={{
              position: "absolute",
              marginLeft: "250px",
              marginTop: "10px"
            }}
          >
            more
          </Button>

          {/* popup dialog */}
          <Modal
            title="Money vs Happiness - 2019/04/19"
            centered
            visible={this.state.modal2Visible}
            footer={null}
            onCancel={() => this.setModal2Visible(false)}
            width={1150}
            zIndex={2000}
          >
            <MoneyContent />
          </Modal>

          {/* inside title */}
          <div
            style={{
              position: "absolute",
              fontSize: "25px",
              marginTop: "70px",
              marginLeft: "50px"
            }}
          >
            Money vs Happiness
          </div>

          {/* contents */}
          <div
            style={{
              position: "absolute",
              marginTop: "190px",
              marginLeft: "30px"
            }}
          >
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“돈이 결혼 생활의 행복을 결정 짓는
              중요한 요소일까? 만약 그렇다면 이걸 뒷받침할 만한 근거는 어디에
              있을까?” 이 물음에 대답하기 위해 진행되었습니다.
            </p>
          </div>

          <div className="MoneyCover__Cover">
            <figure className="MoneyCover__front">
              {/* Front title */}
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "35px",
                  fontFamily: "Dosis, sans-serif",
                  marginTop: "120px",
                  marginLeft: "15px",
                  color: "#ff948f"
                }}
              >
                Money vs Happiness
              </h1>
              {/* Front subtitle */}
              <h4
                style={{
                  color: "#ff948f",
                  marginTop: "35px",
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                -Case Study-
              </h4>
            </figure>
            <figure className="MoneyCover__back" />
          </div>
        </div>
      </>
    );
  }
}

export default MoneyCover;
