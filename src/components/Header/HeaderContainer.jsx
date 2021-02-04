import React from 'react';
import Header from './Header';
import {getProfile} from '../../state/profileReducer';
import {logOut} from '../../state/authReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';

class HeaderContainer extends React.Component {
  
  render() {
    return (
      <Header logOut={this.props.logOut} getProfile={this.props.getProfile} id={this.props.id}
              login={this.props.login} path={this.props.location.pathname} isFetching={this.props.isFetching}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    id: state.auth.id,
    isFetching: state.auth.isFetching
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

