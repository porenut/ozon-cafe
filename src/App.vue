<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue';

import Tabs from './components/tabs.vue';
import { onMounted } from 'vue';
import store from './store.js';

onMounted(() => {
  store.loadUsers();
});
</script>

<template>
  <Tabs />
</template>

<style scoped></style>
