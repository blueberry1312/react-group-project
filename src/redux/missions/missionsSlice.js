import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setMissionLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setMissionSuccess: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    setMissionError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setMissionLoading, setMissionSuccess, setMissionError } = missionsSlice.actions;

export default missionsSlice.reducer;
