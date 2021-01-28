import React from 'react';
import Info from './Info';
import {connect} from 'react-redux';


let mapDispatchToProps = (dispatch) => {
  return {};
};

let mapStateToProps = (state) => {
  return {
    personInfo: state.profile.info.personInfo,
    name: state.profile.info.personInfo.name,
    surname: state.profile.info.personInfo.surname
  };
};

const InfoContainer = connect(mapStateToProps, mapDispatchToProps)(Info);


export default InfoContainer;