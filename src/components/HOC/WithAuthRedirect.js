import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizeInfo} from '../../state/selectors/authPageSelector';

const mapStateToProps = state =>{
  return{
    isAuthorized: getAuthorizeInfo(state),
  }
}

const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    
    render() {
      if(!this.props.isAuthorized )
        return <Redirect to='/auth'/>
      
      return <Component {...this.props}/>
    }
  }
  
  
  return connect(mapStateToProps)(RedirectComponent)
};

export default WithAuthRedirect;
