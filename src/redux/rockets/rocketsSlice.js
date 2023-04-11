import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRocket/',
  async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log(data);
      return data;
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
      console.log(state.rockets);
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default rocketsSlice.reducer;
