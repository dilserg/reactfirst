import React from 'react';
import styles from './EditPage.module.css';
import {Field} from 'react-final-form';

const LinkInput = ({title}) => {
  return (
    <div>
      <span className={styles.text}>
        {title}.com/
      </span>
      <Field autoComplete='off' name={title} component='input' className={styles.input} type="text"/>
    </div>
  );
};

export default LinkInput;