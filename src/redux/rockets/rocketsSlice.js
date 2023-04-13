import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRocket/',
  async () => {
    try {
      const { data } = await axios.get(API_URL);
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const bookRocket = createAsyncThunk(
  'rockets/bookRocket',
  async (rocketId, { getState }) => {
    const updatedRockets = getState().rockets.rockets.map((rocket) => {
      if (rocket.id === rocketId) {
        return {
          ...rocket,
          reserved: true,
        };
      }
      return rocket;
    });
    return updatedRockets;
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
      state.error = false;
      state.rockets = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(bookRocket.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export default rocketsSlice.reducer;
