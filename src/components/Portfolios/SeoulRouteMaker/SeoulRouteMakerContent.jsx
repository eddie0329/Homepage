import React, { Component } from "react";
import Dialog_Picture from "./images/Dialog.png";
import Map_Picture from "./images/Map.png";
import Use_Case_Diagram from "./images/use_case.png";
import Logical_Architect from "./images/Logical.png";
import Physical_Architect from "./images/Physical.png";
import Login from "./images/Login.png";
import Main from "./images/Main.png";
import SignUp from "./images/Signup.png";
import CreateRoute from "./images/CreateRoute.png";
import AddPreference from "./images/AddPreference.png";
import Request from "./images/AddRequest.png";
import Add from "./images/Add.png";
import Edit from "./images/Edit.png";
import Search from "./images/Search.png";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    No: "1-1",
    Specification: "User choose the region",
    Input: "region",
    Output: ""
  },
  {
    key: "2",
    No: "1-2",
    Specification: "User choose their preferences",
    Input: "categories",
    Output: ""
  },
  {
    key: "3",
    No: "1-3",
    Specification: "User choose thier size of group",
    Input: "Size of Group",
    Output: ""
  },
  {
    key: "4",
    No: "1-4",
    Specification: "User can add favorite their route",
    Input: "",
    Output: ""
  },
  {
    key: "5",
    No: "1-5",
    Specification: "User can lookup their favorites",
    Input: "",
    Output: ""
  },
  {
    key: "6",
    No: "1-6",
    Specification: "User can delete their favorites",
    Input: "",
    Output: ""
  },
  {
    key: "7",
    No: "1-7",
    Specification: "User can request the places",
    Input:
      "Name, region, phone number, open/close time, size of group, availabe seasons ,explainations, category",
    Output: ""
  },
  {
    key: "8",
    No: "1-8",
    Specification: "User can search their own places",
    Input: "categories",
    Output: ""
  },
  {
    key: "9",
    No: "2-1",
    Specification: "Manager can search places with name",
    Input:
      "Name, region, phone number, open/close time, size of group, availabe seasons ,explainations, category",
    Output: ""
  },
  {
    key: "10",
    No: "2-2",
    Specification: "Manager can search places with region",
    Input:
      "Name, region, phone number, open/close time, size of group, availabe seasons ,explainations, category",
    Output: ""
  },
  {
    key: "11",
    No: "2-3",
    Specification: "Manager can modify the place",
    Input: "modified information",
    Output: ""
  },
  {
    key: "12",
    No: "2-4",
    Specification: "Manager can delete places",
    Input: "",
    Output: ""
  },
  {
    key: "13",
    No: "2-5",
    Specification: "Manager can add places",
    Input:
      "Name, region, phone number, open/close time, size of group, availabe seasons ,explainations, category",
    Output: ""
  }
];

const columns = [
  {
    title: "No",
    dataIndex: "No",
    key: "no"
  },
  {
    title: "Specification",
    dataIndex: "Specification",
    key: "specification"
  },
  {
    title: "Input",
    dataIndex: "Input",
    key: "input"
  },
  {
    title: "Output",
    dataIndex: "Output",
    key: "output"
  }
];

export class SeoulRouteMakerContent extends Component {
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
        <img
          src={Dialog_Picture}
          alt="Dialog Picture"
          style={{ width: "600px", height: "500px", display: "inline" }}
        />
        <img
          src={Map_Picture}
          alt="Map Picture"
          style={{ width: "400px", height: "500px", display: "inline" }}
        />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seoul Route Maker helps people to easily
          make course, including dining, amusement and accomodation, based on
          user's preferences. I was resposible of designing database system in
          this project. The technologies used for this project are the
          following: java, mysql, star UML, Oracle sql developer modeler.
        </p>
        <h2 style={{ fontWeight: "bold" }}>1. Architect</h2>
        <h3 style={{ fontWeight: "bold" }}>1.1 User Specification</h3>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seoul Route Maker System creates courses
          that include dining, amusement, accomodation within the city of Seoul.
          Firstly, user checks their region, that they will visit or currently
          positioned. The regions are specified with different 5 places, kondae,
          hongdae, itaewon, kangnam. Secondly, user should check their favorites
          within categories. There are numerous selections, which is dining,
          cafe, amusement, shopping, theater. In addition, dining is divided by
          korean cuisine, japanese cuisine, chinese cuisine, and western cuisin.
          Thirdly, user must choose their size of group. If there are less then
          3, then they have to choose group of small. Else, they have to choose
          large. Finally, if user wants to stay overnight choose accomodation.
          After all of theses set-ups, the system provides courses that will
          satisfy user's needs. The provided courses are generated mainly with
          date, time, and number of people. The date and time must be considered
          because the stores should open when user visits. And there are some
          stores limits the size of group because of the size of their store.
          After enjoying the whole somelike tour, user can add preference the
          service of specific stores or amusements within the course. User can
          simply add preference that will provide other users who choose similar
          set-ups.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not only providing routes, but also
          requesting stores or amusements or accomodations is possible. Users
          simply request to manager to add some facilities that were not in the
          database. Manager overviews the request and decide whether to add
          places in the database. Furthermore, like other managers do, manager
          can manage the database like data base administrator.
        </p>
        <h3 style={{ fontWeight: "bold" }}>1.2 Use-Case Diagram</h3>
        <img
          src={Use_Case_Diagram}
          alt="Use Case Diagram"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "600px",
            height: "425px"
          }}
        />
        <p>
          In this system, users can obtain the routes and request places, where
          are not shown in the system, to manager. Manager can alter the data in
          the system. DBA can handle all of use-cases related to the database.
        </p>

        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <h3 style={{ fontWeight: "bold" }}>1.3 Function Specification</h3>
        <h4>1: USER</h4>
        <h4>2: MANAGER</h4>
        <Table
          pagination={{ pageSize: "8" }}
          indentSize={1}
          dataSource={dataSource}
          columns={columns}
        />

        <h3 style={{ fontWeight: "bold" }}>1.4 DataBase Architects</h3>

        <h4 style={{ fontWeight: "bold" }}>1.4.1 Logical Architect</h4>
        <img
          src={Logical_Architect}
          style={{ width: "900px", height: "500px" }}
        />
        <h4 style={{ fontWeight: "bold" }}>1.4.2 Physical Architect</h4>
        <img src={Physical_Architect} style={{ width: "900px" }} />

        <h2 style={{ fontWeight: "bold" }}>2. Implementation</h2>
        <h3 style={{ fontWeight: "bold" }}>2.1 User Perspective</h3>
        <img
          src={Login}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>-Login Page-</p>
        <img
          src={SignUp}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          -Sign Up Page-
        </p>
        <img
          src={Main}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>-Main Page-</p>
        <img
          src={CreateRoute}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          -Creating Route Page-
        </p>
        <img
          src={AddPreference}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          -Add Preference Page-
        </p>
        <img
          src={Request}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          -Request Page-
        </p>
        <h3 style={{ fontWeight: "bold" }}>2.2 Manager Perspective</h3>
        <img
          src={Search}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>-Search Page-</p>
        <img
          src={Add}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>-Add Page-</p>
        <img
          src={Edit}
          style={{
            width: "650px",
            height: "400px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <p style={{ fontWeight: "bold", textAlign: "center" }}>-Edit Page-</p>
        <h2 style={{ fontWeight: "bold" }}>0. Conclusion</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <h2 style={{ fontWeight: "bold" }}>Appendix A. References</h2>
        <div>
          <div>
            <div>[1]</div>
            <div>
              A. Silberschatz, H. F. Korth, S. Sudarshan, and others,{" "}
              <i>Database system concepts</i>, vol. 4. McGraw-Hill New York,
              1997.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeoulRouteMakerContent;
