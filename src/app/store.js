import { createStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  userState: userReducer
})

export const store = createStore(rootReducer)
