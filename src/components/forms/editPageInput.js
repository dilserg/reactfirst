import React from 'react';
import styles from './editPageInput.module.css';
import warning from '../../images/warning.svg';

const editPageInput = ({input, meta, ...props}) => {
  return (
    <>
      <input className={meta.error && styles.input} {...input} {...props}/>
      {meta.error && <>
        <img alt='' className={styles.image} src={warning}/><span className={styles.warning}>{meta.error}</span>
      </>}
    </>
  );
};


export default editPageInput;