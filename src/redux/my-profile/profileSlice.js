import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getBookedRocket = createAsyncThunk(
  'profile/getBookedRocket',
  async (rocketId, { getState }) => {
    const updatedRockets = getState().rockets.rockets.filter((rocket) => {
      if (rocket.id !== rocketId) {
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
  extraReducers(builder) {
    builder.addCase(getBookedRocket.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});

export default profileSlice.reducer;
