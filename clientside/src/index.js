import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {reducer} from './reducer/reducer.js';
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
// import { dispatchProducts } from './reducer/reducer.js';

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// store.dispatch(dispatchProducts)

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
