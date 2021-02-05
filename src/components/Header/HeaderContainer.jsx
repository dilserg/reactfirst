import React from 'react';
import Header from './Header';
import {getProfile} from '../../state/profileReducer';
import {logOut} from '../../state/authReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {getAuthFetching, getLogin} from '../../state/selectors/authPageSelector';

const HeaderContainer = props => (
  <Header logOut={props.logOut} getProfile={props.getProfile}
          login={props.login} path={props.location.pathname} isFetching={props.isFetching}/>
);

const mapStateToProps = state => {
  return {
    login: getLogin(state),
    isFetching: getAuthFetching(state)
  };
};

const mapDispatchToProps = {
  getProfile,
  logOut,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer)

