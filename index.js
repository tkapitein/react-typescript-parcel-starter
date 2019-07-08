import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

class Index extends React.Component {
  render() {
    return <div>This is a React Parcel starter</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Index />, mountNode);