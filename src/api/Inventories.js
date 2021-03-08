import axios from 'axios';

export default {
  get() {
    return axios.get('/inventories');
  },
  post(payload) {
    return axios.post('/inventories', payload);
  },
  update(id, payload) {
    return axios.put(`/inventories/${id}`, payload);
  },
  delete(id) {
    return axios.delete(`/inventories/${id}`);
  },
};
