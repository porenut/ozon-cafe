<script setup>
import { ref } from 'vue';
import UsersTab from './users/users-tab.vue';
import SheduleTab from './shedule/shedule-tab.vue';

import DxTabPanel from 'devextreme-vue/tab-panel';

const tabs = [
  {
    tabname: 'Пользователи',
    component: UsersTab,
  },
  {
    tabname: 'график',
    component: SheduleTab,
  },
];

defineProps({
  msg: String,
});
</script>

<template>
  <div>
    <DxTabPanel :data-source="tabs">
      <template #title="{ data: tabs }">
        <span>{{ tabs.tabname }}</span>
      </template>
      <template #item="{ data: tabs }">
        <div class="tabpanel-item">
          <component :is="tabs.component"></component></div
      ></template>
    </DxTabPanel>
  </div>
</template>

<style scoped>
.tabpanel-item {
  padding: 1em;
}
</style>
