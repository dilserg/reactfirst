import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import Post from './Posts/Post/Post';
import {
  addPostAC,
  getProfile,
  getStatus,
  setNewStatus,
  setProfile
} from '../../state/profileReducer';
import {withRouter} from 'react-router';
import WithAuthRedirect from '../HOC/WithAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id || this.props.id || this.props.myID;
    this.props.getProfile(id);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.isAuthorized !== this.props.isAuthorized) {
      let id = this.props.match.params.id || this.props.id || this.props.myID;
      this.props.getProfile(id);
    }
  }
  
  render() {
    return <Profile {...this.props} linkID={this.props.match.params.id}/>;
  }
}

const mapStateToProps = state => {
  
  let postsData = state.profile.posts.postsData.map((data) => {
    return <Post name={`${data.name} ${data.surname}`} time={data.date} content={data.content}
                 likesCount={data.likesCount} ava={data.photo}/>;
  });
  return {
    id: state.profile.info.personInfo.id,
    name: state.profile.info.personInfo.name,
    surname: state.profile.info.personInfo.surname,
    photo: state.profile.info.personInfo.photo,
    postsData,
    university: state.profile.info.personInfo.university,
    city: state.profile.info.personInfo.city,
    age: state.profile.info.personInfo.age,
    myID: state.auth.id,
    isFetching: state.profile.isFetching,
    status: state.profile.info.status,
    isAuthorized: state.auth.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStatus(profile){
      setNewStatus(profile)
    },
    getStatus(id) {
      dispatch(getStatus(id));
    },
    setProfile(data) {
      dispatch(setProfile(data));
    },
    addPost(postText) {
      dispatch(addPostAC(postText));
    },
    getProfile(id) {
      dispatch(getProfile(id));
    }
  };
};


export default compose(
connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithAuthRedirect,
)(ProfileContainer);
