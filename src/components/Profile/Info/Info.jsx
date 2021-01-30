import React from 'react';
import styles from './Info.module.css';
import FullInfo from './Description/FullInfo';
import Description from './Description/Description';


const Info = (props) => {

  
  return (
    <div className={styles.info}>
      <div className={styles.name}>
        {props.name} {props.surname}
      </div>
      <Description university={props.university} city={props.city} age={props.age}/>
      <FullInfo/>
    </div>
  );
};
export default Info;