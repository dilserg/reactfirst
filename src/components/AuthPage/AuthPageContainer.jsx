import React from 'react';
import AuthPage from './AuthPage';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getProfile} from '../../state/profileReducer';
import {LogIn} from '../../state/authReducer';

class AuthPageContainer extends React.Component {
  
  componentDidMount() {
    this.props.getProfile(this.props.id)
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger
    if (this.props.isAuthorized){
      
      return <Redirect to='/profile'/>;
    }
  }
  
  render() {
    if (this.props.isAuthorized)
      return <Redirect to='/profile'/>;
    return <AuthPage logIn={this.props.logIn}/>;
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getProfile(){
      dispatch(getProfile())
    },
    logIn(data){
      dispatch(LogIn(data))
    }
  }
}

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized,
    id:state.auth.id
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AuthPageContainer);