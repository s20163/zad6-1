import axios from 'axios';
const baseUrl = 'https://randomuser.me/api/';

const getSingleUser = async () => {
  const response = await axios.get(baseUrl);
  return response.data.results[0];
};

export default { getSingleUser };
