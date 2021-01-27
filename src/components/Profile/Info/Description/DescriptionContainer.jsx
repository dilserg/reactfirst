import React from 'react';
import Description from "./Description";

const DescriptionContainer = (props) => {
  return <Description university={props.personInfo.university}
                      age={props.personInfo.age}
                      city={props.personInfo.city}/>
};

export default DescriptionContainer;