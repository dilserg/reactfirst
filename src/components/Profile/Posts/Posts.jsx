import React from 'react';
import styles from "./Posts.module.css"

const Posts = (props) => {
  
  let postText = React.createRef();
  const onUpdateText = () =>{
    props.updateText(postText);
  }
  
  return (
    <div className={styles.posts}>
      <div>
        <textarea onChange={onUpdateText} value={props.postInputText}
                  ref={postText} placeholder="What's new?" className={styles.input}/>
                  
        <button onClick={props.addPost} className={styles.button}>Add post</button>
      </div>
      {props.postsData}
    </div>
  );
};

export default Posts;