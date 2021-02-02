import React from 'react';
import styles from './AuthPage.module.css'
import {Form, Field} from 'react-final-form';

const AuthPage = (props) => {
  return <>
    <LoginForm  logIn={props.logIn}/>
  </>
};


const LoginForm = (props) =>{
  const onSubmit = (data)=>{
    props.logIn(data)
  }
  return (
    <Form onSubmit={onSubmit}
          render={({handleSubmit}) =>(
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.login}>
                <Field component="input" name='email' placeholder='Login or email' type="text"/>
              </div>
              <div className={styles.password}>
                <Field component="input" name='password' placeholder='Password' type="password"/>
              </div>
              <button className={styles.button}>Log in</button>
              <div className={styles.checkBox}><Field name='rememberMe' component='input' type="checkbox"/>remember me</div>
            </form>
          )}
    />
  );
}


export default AuthPage;