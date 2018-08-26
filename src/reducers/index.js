import { pageReducer } from './page';
import { userReducer } from './user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer
});
