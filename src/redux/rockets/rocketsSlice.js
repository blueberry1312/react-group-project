import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import spaceService from '../../api';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const rockets = await spaceService.getRockets();
  return rockets;
});

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
  },
});

export default rocketsSlice.reducer;
