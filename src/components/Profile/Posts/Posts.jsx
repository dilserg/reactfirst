import React from 'react';
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {updatePostTextActionCreator, addPostActionCreator} from "../../../state/actionCreator";

const Posts = (props) => {
  
  let postText = React.createRef();
  
  const addPost = () =>{
    props.dispatch(addPostActionCreator());
  }
  
  const updateText = () =>{
    let text = postText.current.value;
    props.dispatch(updatePostTextActionCreator(text));
  }
  
  let postsData = props.posts.postsData;
  postsData = postsData.map((data)=>{
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content} likesCount={data.likesCount} ava={data.photo}/>
  });
  
  return (
    <div className={styles.posts}>
      <div>
        <textarea onChange={updateText} value={props.posts.postInputText} ref={postText} placeholder="What's new?" className={styles.input}/>
        <button onClick={addPost} className={styles.button}>Add post</button>
      </div>
      {postsData}
    </div>
  );
};

export default Posts;