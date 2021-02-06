import './App.css';
import {lazy} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import MenuContainer from './components/Menu/MenuContainer';
import {Component} from 'react';
import {connect} from 'react-redux';
import {initializeMe} from './state/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import WithSuspense from './components/HOC/WithSuspense';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const EditPage = lazy(()=>import('./components/EditPage/EditPage'));
const AllUsersContainer = lazy(()=>import('./components/AllUsers/AllUsersContainer'))
const ProfileContainer = lazy(()=>import('./components/Profile/ProfileContainer'))
const AuthPageContainer = lazy(()=>import('./components/AuthPage/AuthPageContainer'))

class App extends Component {
  
  componentDidMount() {
    this.props.initializeMe();
  }
  
  render() {
    if (!this.props.isInitialized)
      return <div className='preloader'><Preloader/></div>;
    return (
      <BrowserRouter>
        <HeaderContainer/>
        <div className='App'>
          <MenuContainer/>
          <div className='content'>
            <Route exact path='/' render={WithSuspense(ProfileContainer)}/>
            <Route path='/profile/:id?' render={WithSuspense(ProfileContainer)}/>
            <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
            <Route path='/users' render={WithSuspense(AllUsersContainer)}/>
            <Route path='/auth' render={WithSuspense(AuthPageContainer)}/>
            <Route path='/edit' render={WithSuspense(EditPage)}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isInitialized: state.app.isInitialized
  };
};

export default connect(mapStateToProps, {initializeMe})(App);

