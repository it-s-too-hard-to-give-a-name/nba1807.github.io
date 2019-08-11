<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./component/z-h-html";
import * as serviceWorker from "./serviceWorker";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './component/Home';
import * as serviceWorker from './serviceWorker';
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
