import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {
  addPost,
  deletePost,
  getProfile,
  getStatus,
  setNewStatus,
  setProfile,
  uploadPhoto
} from '../../state/profileReducer';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import {
  getAboutMe, getContacts, getLookingForAJobDescription, getLookingForAJobInfo,
  getName,
  getPhoto,
  getProfileFetchingInfo, getStatePostsData,
  getStatusText
} from '../../state/selectors/profileSelector';
import {getAuthorizeInfo, getId, getLogin} from '../../state/selectors/authPageSelector';


const ProfileContainer = props=> {
  let id = props.match.params.id || props.myID;
  
  useEffect(()=> props.getProfile(id),[])
  
  useEffect(()=> props.getProfile(id),[props.isAuthorized])

  
  if (!props.isAuthorized && !props.match.params.id)
    return <Redirect to='/auth'/>;
  else
    return <Profile {...props} linkID={props.match.params.id}/>;
}


const mapStateToProps = state => {
  return {
    name: getName(state),
    photo: getPhoto(state),
    postsData: getStatePostsData(state),
    myID: getId(state),
    isFetching: getProfileFetchingInfo(state),
    status: getStatusText(state),
    isAuthorized: getAuthorizeInfo(state),
    login: getLogin(state),
    aboutMe:getAboutMe(state),
    lookingForAJob:getLookingForAJobInfo(state),
    lookingForAJobDescription:getLookingForAJobDescription(state),
    contacts:getContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNewStatus(profile) {
      setNewStatus(profile);
    },
    getStatus(id) {
      dispatch(getStatus(id));
    },
    setProfile(data) {
      dispatch(setProfile(data));
    },
    addPost(postText,name) {
      dispatch(addPost(postText,name));
    },
    getProfile(id) {
      dispatch(getProfile(id));
    },
    uploadPhoto(file){
      dispatch(uploadPhoto(file))
    },
    deletePost(postID){
      dispatch(deletePost(postID))
    }
  };
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainer);
