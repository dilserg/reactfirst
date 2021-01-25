import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, sendMessage, scrollDown, showFull, updatePostText} from "./state/state";

export const renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App showFull={showFull} sendMessage={sendMessage} scrollDown={scrollDown}
           addPost={addPost} state={state} updatePostText={updatePostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

