import React from 'react';
import styles from "./info.module.css"
import "./full.css"

const FullInfo = (props) => {
  return (
    <div className={`${styles.info} info_full info_hide`}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, neque!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, vero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, perspiciatis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel!</p>
    </div>
  );
};

export default FullInfo;