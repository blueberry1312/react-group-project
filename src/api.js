import axios from 'axios';

const spaceService = {
  async getMissions() {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const missions = response.data.map((mission) => ({ ...mission, reserved: false }));
    return missions;
  },
  async getRockets() {
    try {
      const { data } = await axios.get('https://api.spacexdata.com/v4/rockets');
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default spaceService;
