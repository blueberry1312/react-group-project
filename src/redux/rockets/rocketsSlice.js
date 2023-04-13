import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import spaceService from '../../api';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const rockets = await spaceService.getRockets();
  return rockets;
});

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
  },
);

export const cancelBooking = createAsyncThunk(
  'rockets/cancelBooking',
  async (rocketId, { getState }) => {
    const updatedRockets = getState().rockets.rockets.map((rocket) => {
      if (rocket.id === rocketId) {
        return {
          ...rocket,
          reserved: false,
        };
      }
      return rocket;
    });
    return updatedRockets;
  },
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
      state.rockets = action.payload;
    });
    builder.addCase(cancelBooking.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export default rocketsSlice.reducer;
