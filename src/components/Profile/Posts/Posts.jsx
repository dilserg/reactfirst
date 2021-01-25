import React from 'react';
import styles from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = (props) => {
  let postsData = props.postsData;
  postsData = postsData.map((data)=>{
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content} likesCount={data.likesCount} ava={data.photo}/>
  })
  return (
    <div className={styles.posts}>
      <form>
        <textarea placeholder="What's new?" className={styles.input}> </textarea>
        <button className={styles.button}>Add post</button>
      </form>
      {postsData}
    </div>
  );
};

export default Posts;