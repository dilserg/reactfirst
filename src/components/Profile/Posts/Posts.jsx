import React from 'react';
import styles from './Posts.module.css';
import {Form, Field} from 'react-final-form';
import {required} from '../../forms/validators';

const Posts = (props) => {
  return (
    <div className={styles.posts}>
      <div>
        <NewPostForm addPost={props.addPost}/>
      </div>
      {props.postsData}
    </div>
  );
};

const NewPostForm = props =>{
  const onSubmit = data=>props.addPost(data.postText)
  return <Form onSubmit={onSubmit}  render={({handleSubmit})=>(
    <form onSubmit={handleSubmit}>
      <Field validate={required} name='postText' component='textarea' placeholder="What's new?" className={styles.input}/>
      <button className={styles.button}>Add post</button>
    </form>
  )}/>
}

export default Posts;