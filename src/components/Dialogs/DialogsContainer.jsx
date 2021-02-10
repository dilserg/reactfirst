import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import WithAuthRedirect from '../HOC/WithAuthRedirect';
import {compose} from 'redux';
import {getDialogMessages, getSidebarMessages} from '../../state/selectors/dialogsSelector';
import {withRouter} from 'react-router';


const DialogsContainer = (props) => {
  return <Dialogs {...props}/>
};


let mapStateToProps = (state) => {
  return {
    sidebarMessages: getSidebarMessages(state),
    dialogMessages: getDialogMessages(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    scrollDown() {
      const blockToScroll = document.querySelector('.scroll_down');
      blockToScroll.scrollTop = blockToScroll.scrollHeight + 100;
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithAuthRedirect
)(DialogsContainer)