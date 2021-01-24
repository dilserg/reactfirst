import React from 'react';
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import MyAva from "C:\\Users\\dilse\\WebstormProjects\\reactfirst\\src\\images\\Male.png"

const Posts = () => {
  return (
    <div className={styles.posts}>
      <form>
        <textarea placeholder="What's new?" className={styles.input}> </textarea>
        <button className={styles.button}>Add post</button>
      </form>
      <Post name="Ilya Davydov" time="17 dec 2019" content="Hello, world!" LikesCount={230} ava={MyAva}/>
      <Post name="Ilya Davydov" time="17 dec 2019" content="Hello, world!" LikesCount={230} ava={MyAva}/>
      <Post name="Ilya Davydov" time="17 dec 2019" content="Hello, world!" LikesCount={230} ava={MyAva}/>
    </div>
  );
};

export default Posts;