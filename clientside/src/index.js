import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {reducer} from './reducer/reducer.js';
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import axios from 'axios';
// import dotenv from 'dotenv'

// dotenv.config()
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3002";
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
