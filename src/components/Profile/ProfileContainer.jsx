import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import Post from './Posts/Post/Post';
import {addPostAC, getProfile, setProfile, updatePostTextAC} from '../../state/profileReducer';
import {withRouter} from 'react-router';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id || this.props.id;
    this.props.getProfile(id)
  }
  
  render() {
    return <Profile name={this.props.name} surname={this.props.surname} postsData={this.props.postsData}
                    postInputText={this.props.postInputText} updateText={this.props.updateText}
                    addPost={this.props.addPost} university={this.props.university} city={this.props.city}
                    age={this.props.age} photo={this.props.photo}/>;
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


const URLData = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(URLData);