import React, { Component } from "react";

export class MoneyContent extends Component {
  render() {
    return (
      <div
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          height: "550px",
          paddingRight: "10px"
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>0. Introduction</h2>
        <h2 style={{ fontWeight: "bold" }}>1. Body</h2>
        <h2 style={{ fontWeight: "bold" }}>0. Conclusion</h2>
        <h2 style={{ fontWeight: "bold" }}>Appendix A. References</h2>
      </div>
    );
  }
}

export default MoneyContent;
