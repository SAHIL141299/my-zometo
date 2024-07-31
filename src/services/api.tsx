import axios from 'axios';

const SEARCH_API = 'http://192.168.1.32:5500/search';

export const fetchRestaurantsApi = async () => {
  const response = await axios.get(SEARCH_API);
  return response.data;
};
