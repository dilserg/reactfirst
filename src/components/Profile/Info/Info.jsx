import React from 'react';
import styles from './Info.module.css';

import Description from './Description/Description';


const Info = props => (
  <div className={styles.info}>
    <div className={styles.name}>
      {props.name}
    </div>
    {props.status()}
    <Description {...props}/>
  </div>
);

export default Info;