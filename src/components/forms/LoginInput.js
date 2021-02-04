import React from 'react';
import styles from './LoginInput.module.css';
import warning from '../../images/warning.svg';

const LoginInput = ({input, meta, ...props}) => {
  const className = () =>{
    if (meta.error && meta.touched){
      return styles.input
    }else if(!meta.touched && props.hasError){
      return styles.input
    }
    
  }
  return (
    <>
      <input className={className()} {...input} {...props}/>
        {meta.touched && meta.error
        ? <><img className={styles.image} src={warning}/><span className={styles.warning}>{meta.error}</span></>
        : undefined}
    </>
  );
};


export default LoginInput;