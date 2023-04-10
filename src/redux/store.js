import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

const rootReducer = combineReducers({
  missionsSlice: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
