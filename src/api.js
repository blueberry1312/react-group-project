import axios from 'axios';

const spaceService = {
  async getMissions() {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
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
