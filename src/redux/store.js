import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  missionsSlice: missionsReducer,
  rocketsSlice: rocketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
