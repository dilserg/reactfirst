import React from 'react';
import style from './DialogeMessage.module.css'

const SelfDialogMessage = (props) => {
  return (
    <div className={`${style.message} ${style.self}`}>
      <div className={style.name}>
        <a className={style.name} href="profile">
          You
        </a>
      </div>
      <div className={style.content}>
        {props.message}
      </div>
    </div>
  );
};

export default SelfDialogMessage;