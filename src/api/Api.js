import axios from 'axios';

const baseUrl = process.env.VUE_APP_API_BASE_URL;

const Api = {
  init() {
    axios.defaults.baseURL = baseUrl;
  },
};

export default Api;
