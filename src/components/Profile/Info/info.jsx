import React from 'react';
import styles from './info.module.css'
import Description from "./Description/Description";

const Info = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>
        {props.name} {props.surname}
      </div>
      <Description age={12}/>
    </div>
  );
};

export default Info;