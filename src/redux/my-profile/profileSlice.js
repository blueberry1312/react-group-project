import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: [],
  isLoading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setProfileSuccess: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    setProfileError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
