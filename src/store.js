import { reactive } from 'vue';
import axios from 'axios';

const store = reactive({
  users: [],
  loadUsers() {
    axios.get('https://rvz-bar.ru/api/get-users').then((response) => {
      store.users = response.data;
    });
  },
  deleteUser(id) {
    axios.post('https://rvz-bar.ru/api/delete-user/' + id).then(() => {
      store.loadUsers();
    });
  },
  addUser(data) {
    axios
      .post('https://rvz-bar.ru/api/add-user', {
        name: data.name,
        phone: data.phone,
      })
      .then(() => {
        store.loadUsers();
      });
  },
});

export default store;
