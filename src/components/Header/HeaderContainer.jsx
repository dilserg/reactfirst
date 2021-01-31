import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {setUserDataAC} from '../../state/actionCreator';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
  getData = () => {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
      .then((response) => {
      const data = response.data.data
      this.props.setUserData(data.id, data.email, data.login);
    });
  };
  
  componentDidMount() {
    this.getData();
  }
  
  render() {
    return (
      <Header login={this.props.login}/>
    );
  }
}

const mapStateToProps = state => {
  return{
    login:state.auth.login
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setUserData(id, email, login) {
      dispatch(setUserDataAC(id, email, login));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

