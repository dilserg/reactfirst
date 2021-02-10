import React from 'react';
import styles from './Dialogs.module.css';
import DialogContainer from './Dialog/DialogContainer';
import InputMessageContainer from './InputMessage/InputMessageContainer';
import {Route} from 'react-router-dom';


const Dialogs = (props) => {
  const className = ()=>{
    if (props.match.params.id){
      return styles.sidebar
    }
    return `${styles.sidebar} ${styles.noId}`
  }
  return (
    <div className={styles.dialogs}>
      <div className={className()}>
        {props.sidebarMessages}
      </div>
      <Route exact path={`/dialogs/${props.match.params.id}`}>
        <div className={styles.wrapper}>
          <DialogContainer id={props.match.params.id} dialogMessages={props.dialogMessages}/>
          <InputMessageContainer store={props.store} inputMessage={props.inputMessage}/>
        </div>
      </Route>
    </div>
  );
};

export default Dialogs;