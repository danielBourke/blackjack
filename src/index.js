import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import * as serviceWorker from "./serviceWorker";
import { configureStore } from './store';


const style1 = [
  'color: white',
  'background: #42ddf5', 
  'font-size: 3em',
  'padding: 100px',
  'font-family: Roboto'
].join(';');

const flame = String.fromCodePoint(0x1F525)
console.log(`%cBuilt with react ${flame}${flame}${flame}!`, style1);


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
