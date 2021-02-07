import React from 'react';
import styles from './EditPage.module.css';
import {Field, Form} from 'react-final-form';
import LinkInput from './EditPageInput';
import {editPage} from '../../state/profileReducer';


const EditPage = () => {
  return (
    <>
      <div className={styles.head}>Change</div>
      <EditPageForm/>
    </>
  );
};

const EditPageForm = () => {
  const onSubmit = data => {
    editPage(data)
  }
  
  return (
    <Form onSubmit={onSubmit} render={({handleSubmit}) => (
      <form onSubmit={handleSubmit} className={styles.textContainer}>
        <div>
        <span className={styles.text}>
        Name:
        </span>
          <Field autoComplete='off' name='name' component='input' className={styles.input} type="text"/>
        </div>
        <div>
        <span className={styles.text}>
        About me:
        </span>
          <Field autoComplete='off' name='aboutMe' component='input' className={styles.input} type="text"/>
        </div>
        <div>
        <span className={styles.text}>
        Id:
        </span>
          <Field autoComplete='off' name='id' component='input' className={styles.input} type="number"/>
        </div>
        <div className={styles.select}>
          <span className={styles.text}>
          <Field name='isLookingForJob' component='select'>
            <option value={0}>Current job:</option>
            <option value={1}>Looking for a job:</option>
          </Field>
        </span>
          <Field autoComplete='off' name='job' component='input' className={styles.input} type="text"/>
        </div>
        <LinkInput title='vk'/>
        <LinkInput title='facebook'/>
        <LinkInput title='github'/>
        <LinkInput title='instagram'/>
        <LinkInput title='twitter'/>
        <LinkInput title='youtube'/>
        <div>
        <span className={styles.text}>
        Main Link:
        </span>
          <Field autoComplete='off' name='mainLink' component='input' className={styles.input} type="text"/>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Submit</button>
        </div>
      </form>
    )}/>
  );
};

export default EditPage;