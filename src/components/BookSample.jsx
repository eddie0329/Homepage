import React, { Component } from "react";
import { Row, Col } from "antd";

import "./BookSample.css"

export class BookSample extends Component {
  render() {
    return (
      <div className="MyBook">
          <div className="Cover">
              <figure className="front"> front </figure>
              <figure className="back"> back </figure>
          </div>
      </div>
    );
  }
}

export default BookSample;
