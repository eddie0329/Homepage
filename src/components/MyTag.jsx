import React, { Component } from "react";
import { Col, Tag } from "antd";

export class MyTag extends Component {
  render() {
    return (
      <Col span={8}>
        <div
          style={{
            marginLeft: "50px",
            textSize: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "60%",
            marginBottom: "3px"
          }}
        >
          Tags:
        </div>
        <div style={{ textAlign: "center" }}>
          <Tag
            color="magenta"
            style={{
              backgroundColor: "#f3f7f820",
              textTransform: "uppercase",
              marginBottom: "8px"
            }}
          >
            # Programmer
          </Tag>
          <Tag
            color="volcano"
            style={{ backgroundColor: "#f3f7f820", textTransform: "uppercase" }}
          >
            # Actor
          </Tag>

          <Tag
            color="gold"
            style={{ backgroundColor: "#f3f7f820", textTransform: "uppercase" }}
          >
            # Guitarist
          </Tag>
          <Tag
            color="lime"
            style={{ backgroundColor: "#f3f7f820", textTransform: "uppercase" }}
          >
            # Photographer
          </Tag>
          <Tag
            color="green"
            style={{ backgroundColor: "#f3f7f820", textTransform: "uppercase" }}
          >
            # Student
          </Tag>

          <Tag
            color="blue"
            style={{
              backgroundColor: "#f3f7f820",
              textTransform: "uppercase",
              marginBottom: "8px"
            }}
          >
            # Major In Economics
          </Tag>

          <Tag
            color="purple"
            visible="false"
            style={{ backgroundColor: "#f3f7f820", textTransform: "uppercase" }}
          >
            # Major In Computer Science
          </Tag>
        </div>
      </Col>
    );
  }
}

export default MyTag;
