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
          <Route path="/profile" render={() => <Profile showFull={props.showFull}
                                                        addPost={props.addPost}
                                                        state={props.state}
                                                        postsText={props.postsText}
                                                        updatePostText={props.updatePostText}/>} />
          
          <Route path="/dialogs" render={() => <Dialogs scrollDown={props.scrollDown}
                                                        sendMessage={props.sendMessage}
                                                        state={props.state} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
