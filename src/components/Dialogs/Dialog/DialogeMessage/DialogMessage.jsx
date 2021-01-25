import React from 'react';
import style from "./DialogeMessage.module.css"

const DialogMessage = (props) => {
  return (
    <div className={style.message}>
      <div className={style.photo}>
        <img src={props.photo} alt=""/>
      </div>
      <div className={style.name}>
        <a className={style.name} href="#">
          {props.name}
        </a>
      </div>
      <div className={style.content}>
        {props.message}
      </div>
    </div>
  );
};


export default DialogMessage;
