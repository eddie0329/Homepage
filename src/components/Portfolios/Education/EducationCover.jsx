import React, { Component } from "react";
import EducationContent from "./EducationContent";
import { Modal, Button } from "antd";

import "./EducationCoverStyle.css";

export class EducationCover extends Component {
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
      <div className="EducationCover_MyBook">
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap');
        </style>
        {/* edge */}
        <div
          style={{
            position: "absolute",
            width: "25px",
            height: "322px",
            background: "#4f72ff"
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
          title="Sky Castle - 2019/05/11"
          centered
          visible={this.state.modal2Visible}
          footer={null}
          onCancel={() => this.setModal2Visible(false)}
          width={1150}
          zIndex={2000}
        >
          <EducationContent />
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
          Sky Castle
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“인기 드라마 ‘Sky Castle’에서 그려졌던
            부모님들의 모습처럼 과연 현실에서도 고학력 집안이 아이들 교육에 더
            열을 올릴까?” 라는 질문에 맞춰 이에 따른 근거를 찾기 위해 다음과
            같은 케이스 스터디를 진행하였습니다.
          </p>
        </div>
        <div className="EducationCover_Cover">
          <figure className="EducationCover_front">
            {/* Front title */}
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                marginTop: "120px",
                marginLeft: "100px",
                fontFamily: "Fredericka the Great, cursive",
                color: "#4154b5"
              }}
            >
              Sky Castle
            </h1>
            {/* Front subtitle */}
            <h4
              style={{
                color: "#4154b5",
                marginLeft: "145px",
                fontFamily: "Fredericka the Great, cursive",
                fontWeight: "bold"
              }}
            >
              -Case Study-
            </h4>
          </figure>
          <figure className="EducationCover_back"> </figure>
        </div>
      </div>
    );
  }
}

export default EducationCover;
