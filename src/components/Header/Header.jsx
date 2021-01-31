import React from 'react';
import styles from './Header.module.css';
import twitter from '../../images/twitter.svg';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  const block = () =>{
    if (props.login){
      return <NavLink onClick={props.getProfile} to={`/profile/${props.id}`}>{props.login}</NavLink>
    }
    return <NavLink to='/auth'>Login</NavLink>
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href='#'>
          <img src={twitter} alt=''/>
        </a>
        <div className={styles.login}>
            {block()}
        </div>
      </div>
    </header>)
    ;
};

export default Header;