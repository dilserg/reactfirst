import React from 'react';
import styles from './Contact.module.css';

const Contact = ({link, title}) => {
  const linkText = link.length > 30 ? link.slice(0,30) + '...' : link
  if (link)
    return (
      <p className={styles.item}>
        <span className={styles.dim}>{title}:</span>
        <a href={link} className={styles.contact}>{linkText}</a>
      </p>
    );
  return <></>;
};

export default Contact;