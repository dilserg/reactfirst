import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import AllUsersReducer from './AllUsersReducer';

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  allUsers: AllUsersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;