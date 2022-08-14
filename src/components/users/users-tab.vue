<script setup>
import { ref, onMounted } from 'vue';
import User from './user.vue';
import axios from 'axios';

const udata = ref(null);

// lifecycle hooks
function load() {
  axios.get('https://rvz-bar.ru/api/test').then((response) => {
    udata.value = response.data;
    //console.log(response.data[0].name);
    //console.log(response.data);
  });
}

onMounted(() => {
  load();
});
</script>

<template>
  <nav class="navbar bg-light">
    <form class="d-flex">
      <button class="btn btn-success me-2" type="button">Создать</button>
      <input type="text" class="form-control" placeholder="Фильтр" />
    </form>
  </nav>
  <table class="table table-sm table-bordered">
    <tr>
      <th>ФИО</th>
      <th>us ID</th>
      <th>Телефон</th>
    </tr>
    <tr v-for="u in udata">
      <User :name="u.name" :usid="u.us_id" :phone="u.phone" :id="u.id" />
    </tr>
  </table>
</template>
