import { reactive } from 'vue';
import axios from 'axios';

const store = reactive({
  users: [],
  statuses: [],
  loadStatuses() {
    axios.get('https://rvz-bar.ru/api/status/list').then((response) => {
      store.statuses = response.data;
    });
  },
  loadUsers() {
    axios.get('https://rvz-bar.ru/api/users/list').then((response) => {
      store.users = response.data;
    });
  },
  deleteUser(id) {
    axios.post('https://rvz-bar.ru/api/users/delete/' + id).then(() => {
      store.loadUsers();
    });
  },
  addUser(data) {
    axios.post('https://rvz-bar.ru/users/add', data).then(() => {
      store.loadUsers();
    });
  },
  updateUser(data) {
    axios.post('https://rvz-bar.ru/api/users/update', data).then(() => {
      store.loadUsers();
    });
  },
});

export default store;
