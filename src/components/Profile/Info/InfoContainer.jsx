import React,{useState, useEffect} from 'react';
import Info from './Info';
import styles from './Info.module.css';


const InfoContainer = props =>{
  let [editMode, setEditMode] = useState(false)
  let [statusText, setStatusText] = useState(props.status)
  
  const toggleEditMode = () => {
    setEditMode(!editMode)
    props.setNewStatus(statusText)
  };
  
  const  updateStatusText =(e) =>{
    setStatusText(e.currentTarget.value)
  }
  
  useEffect(()=>{
    let id = props.linkID || props.myID;
    props.getStatus(id);
  },[])
  
  useEffect(()=>{
    setStatusText(props.status)
  },[props.status])
  
  const status = () => {
    if (!props.linkID || props.myID == props.linkID) {
      if (editMode)
        return <input className={styles.input} autoFocus={true} onBlur={toggleEditMode}
                      value={statusText} onChange={updateStatusText}/>;
      else {
        if (statusText) {
          
          if (statusText.length < 50) {
            return <span onClick={toggleEditMode} className={`${styles.status}  ${styles.hover}`}>
              {statusText}</span>;
          } else {
            
            let statusTextSliced = statusText.slice(0, 50) + '...';
            return <span onClick={toggleEditMode}
                         className={`${styles.status} ${styles.hover}`}>{statusTextSliced}</span>;
          }
          
        } else
          return <span onClick={toggleEditMode} className={`${styles.status} ${styles.dim} ${styles.hover}`}>
            set status...</span>;
      }
    } else if (props.linkID) {
      if (statusText) {
        if (statusText.length < 50) {
          return <span className={styles.status}>{statusText}</span>;
        } else {
          let statusText = statusText.slice(0, 50) + '...';
          return <span className={styles.status}>{statusText}</span>;
        }
      } else
        return <span className={`${styles.status} ${styles.dim}`}>no status</span>;
    }
  };
  
  return (
    <Info {...props} status={status}/>
  );
}


export default InfoContainer;