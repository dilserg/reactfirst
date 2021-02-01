import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import Post from './Posts/Post/Post';
import {addPostAC, getProfile, setProfile, updatePostTextAC} from '../../state/profileReducer';
import {withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';
import WithAuthRedirect from '../HOC/WithAuthRedirect';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let id =this.props.match.params.id || this.props.id ;
    this.props.getProfile(id)
  }
  
  render() {

    
    return <Profile {...this.props}/>;
  }
}

const mapStateToProps = state => {
  
  let postsData = state.profile.posts.postsData.map((data) => {
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content}
                 likesCount={data.likesCount} ava={data.photo}/>;
  });
  return {
    id:state.profile.info.personInfo.id,
    name: state.profile.info.personInfo.name,
    surname: state.profile.info.personInfo.surname,
    photo:state.profile.info.personInfo.photo,
    postsData,
    postInputText: state.profile.posts.postInputText,
    university: state.profile.info.personInfo.university,
    city: state.profile.info.personInfo.city,
    age: state.profile.info.personInfo.age,
    
    isFetching:state.profile.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProfile(data){
      dispatch(setProfile(data))
    },
    updateText(postText){
      let text = postText.current.value;
      dispatch(updatePostTextAC(text));
    },
    addPost(){
      dispatch(addPostAC());
    },
    getProfile(id){
      dispatch(getProfile(id))
    }
  };
};


let WithRedirectProfileContainer = WithAuthRedirect(ProfileContainer)

const URLData = withRouter(WithRedirectProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(URLData);