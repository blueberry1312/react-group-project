import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  getState: () => store.getState,
});

export default store;
