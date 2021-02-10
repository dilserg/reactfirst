import React from 'react';
import styles from './EditPage.module.css';
import {Field} from 'react-final-form';

const LinkInput = ({title, initialValue}) => {
  debugger
  if (initialValue) {
    const start = title.length + 5;
    initialValue = initialValue.slice(start);
  }
  
  return (
    <div>
      <span className={styles.text}>
        {title}.com/
      </span>
      <Field initialValue={initialValue} autoComplete='off' name={title} component='input' className={styles.input}
             type="text"/>
    </div>
  );
};

export default LinkInput;