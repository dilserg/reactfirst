import React from 'react';
import Header from './Header';
import {getProfile} from '../../state/profileReducer';
import {authMe} from '../../state/authReducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  
  componentDidMount() {
    this.props.getData();
  }
  
  render() {
    return (
      <Header getProfile={this.props.getProfile} id={this.props.id} login={this.props.login}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    id: state.auth.id
  };
};

const mapDispatchToProps = {
    getProfile,
    getData: authMe
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

