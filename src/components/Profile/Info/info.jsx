import React from 'react';
import styles from './info.module.css'
import Description from "./Description/Description";


const Info = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>
        {props.info.personInfo.name} {props.info.personInfo.surname}
      </div>
      <Description showFull={props.showFull} personInfo={props.info.personInfo}/>
    </div>
  );
};

export default Info;