import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import spaceService from '../../api';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const missions = await spaceService.getMissions();
  return missions;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.missions = action.payload;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default missionsSlice.reducer;
