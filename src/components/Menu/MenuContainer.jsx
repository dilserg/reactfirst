import React from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';
import {getUsers, toFirstPage} from '../../state/AllUsersReducer';



const mapStateToProps = state =>({})

const mapDispatchToProps =dispatch => {
  return{
    toFirstPage(){
      dispatch(toFirstPage())
    },
    getUsers(){
      dispatch(getUsers())
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Menu)