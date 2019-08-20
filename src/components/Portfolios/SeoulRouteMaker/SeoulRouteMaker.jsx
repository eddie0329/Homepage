import React, { Component } from "react";
import "./SeoulRouteMakerStyle.css";
import SeoulRouteMakerContent from "./SeoulRouteMakerContent.jsx";
import { Modal, Button } from "antd";

export class SeoulRouteMaker extends Component {
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
          url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
        </style>
        <div className="SeoulRouteMaker_MyBook">
          {/* edge */}
          <div
            style={{
              position: "absolute",
              width: "25px",
              height: "322px",
              background: "#3f693f"
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
            title="Seoul Route Maker 2018/12/02"
            centered
            visible={this.state.modal2Visible}
            footer={null}
            onCancel={() => this.setModal2Visible(false)}
            width={1150}
            zIndex={2000}
          >
            <SeoulRouteMakerContent />
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
            Seoul Route Maker
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Project is ought to design for
              the people who want to explore extra-ordinary places, which are
              either familiar or unfamiliar region. It will satisfy both
              tourists and people, who are not live within the area of Seoul.
            </p>
          </div>
          <div className="SeoulRouteMaker_Cover">
            <figure className="SeoulRouteMaker_front">
              {/* title */}
              <h1
                style={{
                  fontWeight: "bold",
                  fontFamily: "Dancing Script, cursive",
                  fontSize: "40px",
                  marginTop: "100px",
                  marginLeft: "15px",
                  color: "#696b69"
                }}
              >
                Seoul Route Maker
              </h1>
              <h4
                style={{
                  color: "#696b69",
                  marginTop: "40px",
                  marginLeft: "60px",
                  fontWeight: "bold"
                }}
              >
                -DataBase Team Project-
              </h4>
            </figure>
            <figure className="SeoulRouteMaker_back" />
          </div>
        </div>
      </>
    );
  }
}

export default SeoulRouteMaker;
