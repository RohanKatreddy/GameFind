import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'da0f050f1b3640159ee1ae73f1b88bfa',
  },
});
