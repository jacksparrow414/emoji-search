import React from "react";
import ReactDOM from "react-dom";
// 这里引入对应的App组件，具体定义 使用export default class App extends ...
import App from "./App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

ReactDOM.render(<App />, document.getElementById("root"));
