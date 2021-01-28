import React from 'react';
import SidebarMessage from './SidebarMessage';


const SidebarMessageContainer = (props) => {
  return <SidebarMessage name={props.name} content={props.content} id={props.id} scrollDown={props.scrollDown}/>;
};

export default SidebarMessageContainer;