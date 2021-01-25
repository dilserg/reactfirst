import React from 'react';
import styles from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = (props) => {
  
  let postText = React.createRef();
  
  const addPost = () =>{
    props.addPost();
  }
  
  const updateText = () =>{
    let text = postText.current.value;
    props.updatePostText(text);
  }
  
  let postsData = props.postsData;
  postsData = postsData.map((data)=>{
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content} likesCount={data.likesCount} ava={data.photo}/>
  });
  
  return (
    <div className={styles.posts}>
      <div>
        <textarea onChange={updateText} value={props.postInputText} ref={postText} placeholder="What's new?" className={styles.input}/>
        <button onClick={addPost} className={styles.button}>Add post</button>
      </div>
      {postsData}
    </div>
  );
};

export default Posts;