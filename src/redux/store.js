import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import profileReducer from './my-profile/profileSlice';
import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  missionsSlice: missionsReducer,
  rocketsSlice: rocketsReducer,
  profileSlice: profileReducer,
});

// const store = configureStore({
//   reducer: rootReducer,
//   getState: () => store.getState,
// });

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  getState: () => store.getState,
});

export default store;
