import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import spaceService from '../../api';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const missions = await spaceService.getMissions();
  return missions;
});

export const joinMission = createAsyncThunk(
  'missions/joinMission',
  async (missionId, { getState }) => {
    const updatedMissions = getState().missions.missions.map((mission) => {
      if (mission.mission_id === missionId) {
        return {
          ...mission,
          reserved: true,
        };
      }
      return mission;
    });
    return updatedMissions;
  },
);

export const leaveMission = createAsyncThunk(
  'missions/leaveMission',
  async (missionId, { getState }) => {
    const updatedMissions = getState().missions.missions.map((mission) => {
      if (mission.mission_id === missionId) {
        return {
          ...mission,
          reserved: false,
        };
      }
      return mission;
    });
    return updatedMissions;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(joinMission.fulfilled, (state, action) => {
        state.missions = action.payload;
      })
      .addCase(leaveMission.fulfilled, (state, action) => {
        state.missions = action.payload;
      });
  },
});

export default missionsSlice.reducer;
