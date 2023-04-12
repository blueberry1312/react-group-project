import axios from 'axios';

const spaceService = {
  async getMissions() {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  },
};

export default spaceService;
