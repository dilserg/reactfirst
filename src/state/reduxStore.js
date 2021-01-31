import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import AllUsersReducer from './AllUsersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  allUsers: AllUsersReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;