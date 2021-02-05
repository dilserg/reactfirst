import React from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';
import {getUsers, goToFirstPage} from '../../state/AllUsersReducer';
import {getProfile, getStatus} from '../../state/profileReducer';
import {getAuthorizeInfo, getId} from '../../state/selectors/authPageSelector';
import {getUsersOnOnePageCount} from '../../state/selectors/allUsersSelectors';

const MenuContainer = function (props) {
  const toFirstPage = () => {
    props.goToFirstPage();
    props.getUsers(1, props.usersOnOnePage);
  };
  
  const loadProfile = () => {
    props.getStatus(props.id);
    props.getProfile(props.id);
  };
  return <Menu loadProfile={loadProfile} toFirstPage={toFirstPage} {...props}/>;
};


const mapStateToProps = state => {
  return {
    id: getId(state),
    isAuthorized: getAuthorizeInfo(state),
    usersOnOnePage: getUsersOnOnePageCount(state)
  };
};

const mapDispatchToProps = {
  goToFirstPage,
  getUsers,
  getProfile,
  getStatus
};


export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);