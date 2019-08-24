import React, { Component } from "react";
import SavingContent from "./SavingContent";
import { Modal, Button } from "antd";

import "./SavingCoverStyle.css";

export class SavingCover extends Component {
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
      <div className="Saving_MyBook">
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Hepta+Slab&display=swap');
        </style>
        {/* edge */}
        <div
          style={{
            position: "absolute",
            width: "25px",
            height: "322px",
            background: "#3d4752"
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
          title="Savings - 2019/06/19"
          centered
          visible={this.state.modal2Visible}
          footer={null}
          onCancel={() => this.setModal2Visible(false)}
          width={1150}
          zIndex={2000}
        >
          <SavingContent />
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
          Savings
        </div>

        {/* contents */}
        <div
          style={{
            position: "absolute",
            marginTop: "190px",
            marginLeft: "30px"
          }}
        >
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className="Saving_Cover">
          <figure className="Saving_front">
            {/* Front title */}
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                marginTop: "100px",
                marginLeft: "70px",
                fontFamily: 'Hepta Slab, serif',
                color: "black"
              }}
            >
              Savings
            </h1>
            {/* Front subtitle */}
            <h4
              style={{
                color: "black",
                marginTop: "1px",
                marginLeft: "110px",
                fontFamily: 'Hepta Slab, serif',
                fontWeight: "bold"
              }}
            >
              -Case Study-
            </h4>
          </figure>
          <figure className="Saving_back"> </figure>
        </div>
      </div>
    );
  }
}

export default SavingCover;
