import React, {useState} from 'react';
import styles from './Description.module.css';
import FullInfo from './FullInfo';


const Description = (props) => {
  
  
  const [isFullInfo, setFullInfo] = useState(false);
  
  const showFull = () => {
    setFullInfo(true);
  };
  const hideFull = () => {
    setFullInfo(false);
  };
  
  const button = () => {
    if (isFullInfo) {
      return <>
        <button onClick={hideFull} className={styles.button}>Hide contacts</button>
        <FullInfo/>
      </>;
    } else {
      return <button onClick={showFull} className={styles.button}>Show contacts</button>;
    }
  };
  
  return (
    <div className={styles.description}>
      <p className={styles.item}>
        {props.isLookingForJob
          ?<> <span className={styles.dim}>Looking for a:</span>
          <span className={styles.info}>{props.job}</span></>
          : <><span className={styles.dim}>Job:</span>
            <span className={styles.info}>{props.job}</span></>
        }
      </p>
        {button()}
    </div>
  );
};

export default Description;