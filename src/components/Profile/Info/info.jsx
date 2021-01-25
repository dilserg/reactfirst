import React from 'react';
import styles from './info.module.css'
import Description from "./Description/Description";


const Info = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>
        {props.personInfo.name} {props.personInfo.surname}
      </div>
      <Description showFull={props.showFull} info={props.personInfo}/>
    </div>
  );
};

export default Info;