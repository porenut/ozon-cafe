<script setup>
import { ref } from 'vue';
import store from '../../store.js';
//import User from './user.vue';
import NewUserModal from './new-user-modal.vue';
</script>

<template>
  <nav class="navbar bg-light">
    <NewUserModal />
    <button class="btn" @click="test">test</button>
  </nav>
  <table class="table table-sm table-bordered">
    <tr>
      <th>ФИО</th>
      <th>us ID</th>
      <th>Телефон</th>
    </tr>
    <tr v-for="u in store.users">
      <td>
        {{ u.name }}
      </td>
      <td>{{ u.usid }}</td>
      <td>{{ u.phone }}</td>
      <td>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            @click="store.deleteUser(u.id)"
          >
            Удалить
          </button>
          <button type="button" class="btn btn-success">Изменить</button>
        </div>
      </td>
    </tr>
  </table>
</template>
