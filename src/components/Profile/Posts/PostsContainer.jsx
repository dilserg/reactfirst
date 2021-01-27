import React from 'react';
import Post from "./Post/Post";
import {updatePostTextActionCreator, addPostActionCreator} from "../../../state/actionCreator";
import Posts from "./Posts";

const PostsContainer = (props) => {
  
  const addPost = () =>{
    props.store.dispatch(addPostActionCreator());
  }
  
  const updateText = (postText) =>{
    let text = postText.current.value;
    props.store.dispatch(updatePostTextActionCreator(text));
  }
  
  let postsData = props.store.getState().profile.posts.postsData;
  
  let postInputText = props.store.getState().profile.posts.postInputText
  
  postsData = postsData.map((data)=>{
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content}
                 likesCount={data.likesCount} ava={data.photo}/>
  });
  
  return <Posts postsData={postsData} updateText={updateText} addPost={addPost} postInputText={postInputText}/>
};

export default PostsContainer;