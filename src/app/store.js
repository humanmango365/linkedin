import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import thunkMiddleware from 'redux-thunk';
import articleReducer from './reducers/articleReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
