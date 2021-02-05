import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import AllUsersReducer from './AllUsersReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk'
import appReducer from './appReducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  allUsers: AllUsersReducer,
  auth: authReducer,
  app:appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.store = store;

export default store;