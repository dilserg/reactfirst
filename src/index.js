import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./state/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";


const renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


renderTree(store.getState());
store.subscribe(() => renderTree(store.getState()))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

