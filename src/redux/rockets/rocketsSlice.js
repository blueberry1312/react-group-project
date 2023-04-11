import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRocket/',
  async () => {
    try {
      return axios.get(API_URL);
    } catch (error) {
      return error;
    }
  }
);

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
