import React from 'react';
import styles from './Contact.module.css';

const Contact = ({link, title}) => {
  if (link)
    return (
      <p className={styles.item}>
        <span className={styles.dim}>{title}:</span>
        <a target='_blank' rel="noreferrer" href={`https://${link}`} className={styles.contact}>{link}</a>
      </p>
    );
  return <></>;
};

export default Contact;