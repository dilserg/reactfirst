import React from 'react';
import Header from './Header';
import {setProfileAC} from '../../state/profileReducer';
import {setUserDataAC} from '../../state/authReducer'
import {connect} from 'react-redux';
import userAPI from '../../api/api';

class HeaderContainer extends React.Component {
  
  getProfile=()=>{
    userAPI.getProfile(this.props.id)
      .then((response)=>{
        this.props.setProfile(response.data);
      })
  }
  
  getData = () => {
    userAPI.authMe()
      .then((response) => {
        const data = response.data.data;
        this.props.setUserData(data.id, data.email, data.login);
      });
  };
  
  componentDidMount() {
    this.getData();
  }
  
  render() {
    return (
      <Header getProfile={this.getProfile} id={this.props.id} login={this.props.login}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    id: state.auth.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserData(id, email, login) {
      dispatch(setUserDataAC(id, email, login));
    },
    setProfile(data){
      dispatch(setProfileAC(data))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

