import React from 'react';
import styles from './Info.module.css';
import FullInfo from './Description/FullInfo';
import DescriptionContainer from './Description/DescriptionContainer';


const Info = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>
        {props.name} {props.surname}
      </div>
      <DescriptionContainer />
      <FullInfo/>
    </div>
  );
};
//props.info.showFull
export default Info;