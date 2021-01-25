import React from 'react';
import styles from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = (props) => {
  let postText = React.createRef();
  const addPost = () =>{
    const text = postText.current.value;
    alert(text)
  }
  
  let postsData = props.postsData;
  postsData = postsData.map((data)=>{
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content} likesCount={data.likesCount} ava={data.photo}/>
  });
  
  return (
    <div className={styles.posts}>
      <form>
        <textarea ref={postText} placeholder="What's new?" className={styles.input}> </textarea>
        <button onClick={addPost} className={styles.button}>Add post</button>
      </form>
      {postsData}
    </div>
  );
};

export default Posts;