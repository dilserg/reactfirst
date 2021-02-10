import React from 'react';
import styles from './EditPage.module.css';
import {Field, Form} from 'react-final-form';
import LinkInput from './EditPageInput';
import {editPage} from '../../state/profileReducer';
import {required} from '../forms/validators';
import editPageInput from '../forms/editPageInput';


const EditPage = (props) => {
  
  return (
    <>
      <div className={styles.head}>Change</div>
      <EditPageForm {...props}/>
    </>
  );
};

const EditPageForm = (props) => {
  const onSubmit = data => {
    editPage(data);
  };
  
  return (
    <Form onSubmit={onSubmit} render={({handleSubmit}) => (
      <form onSubmit={handleSubmit} className={styles.textContainer}>
        <div>
        <span className={styles.text}>
        Name:
        </span>
          <Field initialValue={props.name} validate={required} autoComplete='off'
                 name='name' component={editPageInput} className={styles.input} type="text"/>
      </div>
      <div>
      <span className={styles.text}>
      About me:
      </span>
      <Field initialValue={props.aboutMe} validate={required}  autoComplete='off' name='aboutMe'
             component={editPageInput} className={styles.input} type="text"/>
      </div>
      <div>
      <span className={styles.text}>
      Id:
      </span>
      <Field initialValue={props.id} autoComplete='off' validate={required}
             name='id' component={editPageInput} className={styles.input} type="number"/>
      </div>
      <div className={styles.select}>
      <span className={styles.text}>
      <Field initialValue={props.isLookingForJob ? 1 : 0} name='isLookingForJob' component='select'>
      <option value={0}>Current job:</option>
      <option value={1}>Looking for a job:</option>
      </Field>
      </span>
      <Field initialValue={props.job} autoComplete='off' name='job' validate={required}
             component={editPageInput} className={styles.input} type="text"/>
      </div>
      <LinkInput initialValue={props.vk} title='vk'/>
      <LinkInput initialValue={props.facebook} title='facebook'/>
      <LinkInput initialValue={props.github} title='github'/>
      <LinkInput initialValue={props.instagram} title='instagram'/>
      <LinkInput initialValue={props.twitter} title='twitter'/>
      <LinkInput initialValue={props.youtube} title='youtube'/>
      <div>
      <span className={styles.text}>
      Main Link:
      </span>
      <Field initialValue={props.mainLink} autoComplete='off' name='mainLink' component='input'
             className={styles.input} type="text"/>
      </div>
      <div className={styles.buttonContainer}>
      <button className={styles.button}>Submit</button>
      </div>
      </form>
      )}/>
  );
};

export default EditPage;