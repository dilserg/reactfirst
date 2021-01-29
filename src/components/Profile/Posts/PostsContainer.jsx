import React from 'react';
import Post from './Post/Post';
import {updatePostTextAC, addPostAC} from '../../../state/actionCreator';
import Posts from './Posts';
import {connect} from 'react-redux';




let mapStateToProps = (state) => {
  
  let postsData = state.profile.posts.postsData.map((data) => {
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content}
                 likesCount={data.likesCount} ava={data.photo}/>;
  });
  
  return {
    postsData: postsData,
    postInputText: state.profile.posts.postInputText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateText: (postText) => {
      let text = postText.current.value;
      dispatch(updatePostTextAC(text));
    },
    
    addPost: () => {
      dispatch(addPostAC());
    }
  };
};


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;