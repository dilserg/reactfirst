import Header from "./components/Header/Header";
import './App.css';
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Menu/>
        <div className="content">
          <Route path="/profile" render={() => <Profile store={props.store} />} />
          
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
