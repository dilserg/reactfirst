import React, {useEffect} from 'react';
import AuthPage from './AuthPage';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getProfile} from '../../state/profileReducer';
import {logIn} from '../../state/authReducer';
import {getAuthFetching, getAuthorizeInfo, getErrorInfo, getId} from '../../state/selectors/authPageSelector';


function AuthPageContainer(props) {
  
  useEffect(()=>{
    props.getProfile(props.id)
  },[props.id])
  
  if (props.isAuthorized)
    return <Redirect to='/profile'/>;
  return <AuthPage hasError={props.hasError} isFetching={props.isFetching} logIn={props.logIn}/>;
}

const mapDispatchToProps = {
    getProfile,
    logIn
}

const mapStateToProps = state => {
  return {
    isAuthorized: getAuthorizeInfo(state),
    id: getId(state),
    isFetching: getAuthFetching(state),
    hasError:getErrorInfo(state)
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(AuthPageContainer);