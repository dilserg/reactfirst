import React from 'react';
import Header from './Header';
import {getProfile} from '../../state/profileReducer';
import {getData} from '../../state/authReducer';
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
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

