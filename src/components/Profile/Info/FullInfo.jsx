import React from 'react';
import styles from "./info.module.css"

const FullInfo = () => {
  return (
    <div className={`${styles.info} ${styles.full}`}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, neque!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, perspiciatis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel!</p>
    </div>
  );
};

export default FullInfo;