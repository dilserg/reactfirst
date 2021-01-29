import React from 'react';
import Description from "./Description";
import {connect} from 'react-redux';


const mapStateToProps = state =>{
  return {
    university: state.profile.info.personInfo.university,
    city: state.profile.info.personInfo.city,
    age: state.profile.info.personInfo.age
  }
}

const mapDispatchToProps = dispatch =>{
  return {
  
  }
}

const DescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(Description)
export default DescriptionContainer;