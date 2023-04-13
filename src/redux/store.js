import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import profileReducer from './my-profile/profileSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
    profile: profileReducer,
  },
  getState: () => store.getState,
});

export default store;
