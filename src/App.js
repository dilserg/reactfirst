import Header from './components/Header/Header';
import './App.css';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import AllUsersContainer from './components/AllUsers/AllUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Menu/>
        <div className='content'>
          <Route path='/profile' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() => <AllUsersContainer/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
