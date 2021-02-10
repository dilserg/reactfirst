import React from 'react';
import styles from './Posts.module.css';
import {Form, Field} from 'react-final-form';
import {required} from '../../forms/validators';
import Post from './Post/Post';



const Posts = (props) => {
  let postsData = props.postsData.map((data) => {
    return <Post name={data.name} key={data.postID} id={data.postID} time={data.date} content={data.content}
                 likesCount={data.likesCount} ava={data.photo} deletePost={props.deletePost}/>
  })

  
  return (
    <div className={styles.posts}>
      <div>
        <NewPostForm login={props.login}  addPost={props.addPost}/>
      </div>
      {postsData}
    </div>
  );
};

const NewPostForm = props =>{
  const onSubmit = (data)=>{
    props.addPost(data.postText,props.login)
    data.postText=''
  }
  return <Form onSubmit={onSubmit}  render={({handleSubmit})=>(
    <form onSubmit={handleSubmit}>
      <Field validate={required} name='postText' component='textarea' placeholder="What's new?" className={styles.input}/>
      <button className={styles.button}>Add post</button>
    </form>
  )}/>
}

export default Posts;