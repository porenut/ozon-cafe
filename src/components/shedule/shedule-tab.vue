<script setup>
import { ref } from 'vue';
import store from '../../store.js';
</script>

<template>
  <nav class="navbar bg-light">
    <button class="btn btn-success">get status</button>
  </nav>
  <table class="table table-sm table-bordered border-primary">
    <tr>
      <th>ФИО</th>
      <th>01.08</th>
      <th>02.08</th>
      <th>03.08</th>
      <th>04.08</th>
    </tr>
    <tr v-for="u in store.users">
      <td>{{ u.name }}</td>
    </tr>
  </table>
</template>
