import React from 'react';
import style from './Dialog.module.css';


const Dialog = (props) => {
  return (
    <div className={`${style.content} scroll_down`}>
      {props.dialogMessages}
    </div>
  );
};
export default Dialog;