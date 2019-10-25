import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";

ReactDOM.render(<App />, document.getElementById("root"));

// Google Analytics
ReactGA.initialize("UA-75265785-3");
ReactGA.pageview("/");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
