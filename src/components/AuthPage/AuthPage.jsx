import React from 'react';
import styles from './AuthPage.module.css'
import {Form, Field} from 'react-final-form';
import LoginInput from '../forms/LoginInput';
import { emailChecker,required } from '../forms/validators';
import Preloader from '../common/Preloader/Preloader';

class AuthPage extends React.Component{
  render() {
    return <>
      {this.props.isFetching
      ? <div className={styles.preloader}><Preloader/></div>
      : <LoginForm logIn={this.props.logIn}/>}
    </>
  }
}


const LoginForm = (props) =>{
  
  const onSubmit = (data)=>{
    props.logIn(data)
  }
  return (
    <Form onSubmit={onSubmit}
          render={({handleSubmit}) =>(
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.login}>
                <Field validate={emailChecker} component={LoginInput} name='email' placeholder='Email' type="text"/>
              </div>
              <div className={styles.password}>
                <Field validate={required} component={LoginInput} name='password' placeholder='Password' type="password"/>
              </div>
              <button className={styles.button}>Log in</button>
              <div className={styles.checkBox}><Field name='rememberMe' component='input' type="checkbox"/>remember me</div>
            </form>
          )}
    />
  );
}


export default AuthPage;