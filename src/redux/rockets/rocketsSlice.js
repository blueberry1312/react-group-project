import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    setRocketLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setRocketSuccess: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    setRocketError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default rocketsSlice.reducer;
