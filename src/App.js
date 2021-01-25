import Header from "./components/Header/Header";
import './App.css';
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Menu/>
        <div className="content">
          <Route path="/profile" render={() => <Profile addPost={props.addPost} state={props.state} />} />
          <Route path="/dialogs" render={() => <Dialogs state={props.state} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
