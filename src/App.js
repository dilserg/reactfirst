import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import AllUsersContainer from './components/AllUsers/AllUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import EditPage from './components/EditPage/EditPage';
import MenuContainer from './components/Menu/MenuContainer';
import AuthPageContainer from './components/AuthPage/AuthPageContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <HeaderContainer/>
      <div className='App'>
        <MenuContainer/>
        <div className='content'>
          <Route exact path='/' render={() => <ProfileContainer/>}/>
          <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() => <AllUsersContainer/>}/>
          <Route path='/auth' render={() => <AuthPageContainer/>}/>
          <Route path='/edit' render={() => <EditPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
