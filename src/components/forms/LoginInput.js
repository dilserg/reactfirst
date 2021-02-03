import React from 'react';
import styles from './LoginInput.module.css';
import warning from '../../images/warning.svg';

const LoginInput = ({input, meta, ...props}) => {
  return (
    <>
      <input className={meta.error && meta.touched && styles.input} {...input} {...props}/>
        {meta.touched && meta.error
        ? <><img className={styles.image} src={warning}/><span className={styles.warning}>{meta.error}</span></>
        : undefined}
    </>
  );
};

export default LoginInput;