import React from 'react';
import Info from "./Info";


const InfoContainer = (props) => {
  const personInfo = props.store.getState().profile.info.personInfo
  return <Info personInfo={personInfo} name={personInfo.name} surname={personInfo.surname}/>
};

export default InfoContainer;