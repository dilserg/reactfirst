import React from 'react';
import styles from './AuthPage.module.css'

const AuthPage = () => {
  return (
    <>
      <form className={styles.form}>
      <div className={styles.login}>
        <span className={styles.text}>
          Login:
        </span>
        <input type="text"/>
      </div>
        <div className={styles.password}>
        <span>
          Password:
        </span>
          <input type="password"/>
        </div>
      </form>
    </>
  );
};

export default AuthPage;