import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import missionsReducer from './missions/missionsSlice';
import profileReducer from './my-profile/profileSlice';
import rocketsReducer from './rockets/rocketsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  getState: () => store.getState,
});

export { store, mockStore };
