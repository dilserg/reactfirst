import React from 'react';
import {connect} from 'react-redux';
import SidebarMessage from './SidebarMessage';
import {selectDialog} from '../../../state/dialogsReducer';

const SidebarMessageContainer = (props) => {
  return <SidebarMessage {...props}/>;
};

const mapDispatchToProps = dispatch => {
  return {
    selectDialog(id) {
      dispatch(selectDialog(id));
    },
    scrollDown(){
      setTimeout(()=>{
        const blockToScroll = document.querySelector('.scroll_down');
        blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
      },1)
    }
  };
};

export default connect(null, mapDispatchToProps)(SidebarMessageContainer);