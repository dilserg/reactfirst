import React from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';
import {getUsers, toFirstPage} from '../../state/AllUsersReducer';
import {getProfile, getStatus} from '../../state/profileReducer';

class MenuContainer extends React.Component {
  
  
  
  render() {
    return <Menu {...this.props}/>
  }
}


const mapStateToProps = state =>{
  return {
    id:state.auth.id,
    usersOnOnePage: state.allUsers.usersOnOnePage
  }
}

const mapDispatchToProps =dispatch => {
  return{
    toFirstPage(){
      dispatch(toFirstPage())
    },
    getUsers(){
      dispatch(getUsers())
    },
    getProfile(id){
      dispatch(getProfile(id))
    },
    getStatus(id){
      dispatch(getStatus(id))
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer)