import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

const rocketsSlice = createSlice({
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

export const { setRocketLoading, setRocketSuccess, setRocketError } =
  rocketsSlice.actions;

export default rocketsSlice.reducer;
