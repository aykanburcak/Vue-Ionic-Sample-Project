import axios from 'axios';

export default {
  get() {
    return axios.get('/companies');
  },
  post(payload) {
    return axios.post('/companies', payload);
  },
  update(id, payload) {
    return axios.put(`/companies/${id}`, payload);
  },
  delete(id) {
    return axios.delete(`/companies/${id}`);
  },
};
