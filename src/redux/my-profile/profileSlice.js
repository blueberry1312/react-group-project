import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBookedRocket = createAsyncThunk(
  'rockets/getBookedRocket',
  async (_, { getState }) => {
    const { rockets } = getState().rockets;
    const bookedRockets = rockets.filter((rocket) => rocket.reserved);
    return bookedRockets;
  }
);

const initialState = {
  profile: [],
  isLoading: false,
  error: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBookedRocket.fulfilled, (state, action) => {
      state.rockets = action.payload;
      console.log(state.rockets);
    });
  },
});

export default profileSlice.reducer;
