import { reactive } from 'vue';
import axios from 'axios';

const store = reactive({
  users: [],
  statuses: [],
  schedule:[],
  scheduleDays:[],
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
  setUserSchedule(user_id,data,new_status)
  {

  },
  loadSchedule(data)
  {
    
    axios.get('https://rvz-bar.ru/api/schedule/list',{params:data}).then((response) => {
      let temp=[];
      store.schedule=[];
      response.data.forEach(element => {
      if(!store.scheduleDays.includes(element.day)) store.scheduleDays.push(element.day);
      if(!temp[element.user_id])
      {
        let el={};
        el.name=store.users.find(e=>e.id==element.user_id).name ; 
        el.id=store.users.find(e=>e.id==element.user_id).id ; 
        el[element.day]=store.statuses.find(e=>e.id==element.status_id).status;
        temp[element.user_id]=el;
      }
      else{
        temp[element.user_id][element.day]=store.statuses.find(e=>e.id==element.status_id).status;
      }
      
     
    });
    temp.forEach(element => {
      store.schedule.push(element);  
    });
    console.log(store.schedule)
  });
  }
});

export default store;
