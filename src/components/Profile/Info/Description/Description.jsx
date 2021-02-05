import React,{useState} from 'react';
import styles from './Description.module.css';
import FullInfo from './FullInfo';


const Description = ()=> {

  
  const [isFullInfo, setFullInfo] = useState(false)
  
  const showFull = () =>{
    setFullInfo(true)
  }
  const hideFull = () =>{
    setFullInfo(false)
  }
  
  const button = () => {
    if (isFullInfo){
      return <>
        <button onClick={hideFull} className={styles.button}>Hide full information</button>
        <FullInfo />
      </>
    }
    else{
      return <button onClick={showFull} className={styles.button}>Show full information</button>
    }
  }
  
  return (
    <div className={styles.description}>
      <p className={styles.item}>
        <span className={styles.dim}>Age:</span>
        <span className={styles.info}></span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>City:</span>
        <span className={styles.info}></span>
      </p>
      <p className={styles.item}>
        <span className={styles.dim}>University:</span>
        <span className={styles.info}></span>
      </p>
      <div>
        {button()}
      </div>
    </div>
  );
};

export default Description;