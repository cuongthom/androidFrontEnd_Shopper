import axios from 'axios';
import queryString from 'query-string';
// const API_URL = 'https://backend-air-drop-test.vinhomes.co.uk/';
const API_URL = 'https://cock-fighting-backend.vinhomes.co.uk/';

const AxiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

AxiosClient.interceptors.request.use(async config => {
  return config;
});

AxiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  error => {
    return error.response.data;
  },
);
export default AxiosClient;
