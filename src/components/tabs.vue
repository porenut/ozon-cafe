<script setup>
import { ref } from 'vue';
import UsersTab from './users/users-tab.vue';
import SheduleTab from './shedule/shedule-tab.vue';
defineProps({
  msg: String,
});
</script>

<template>
  <div class="container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="users-tab"
          data-bs-toggle="tab"
          data-bs-target="#users-tab-pane"
          type="button"
          role="tab"
          aria-controls="users-tab-pane"
          aria-selected="true"
        >
          Сотрудники
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="schedule-tab"
          data-bs-toggle="tab"
          data-bs-target="#schedule-tab-pane"
          type="button"
          role="tab"
          aria-controls="schedule-tab-pane"
          aria-selected="false"
        >
          График
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane"
        id="schedule-tab-pane"
        role="tabpanel"
        aria-labelledby="schedule-tab"
        tabindex="0"
      >
        <SheduleTab/>
      </div>
      <div
        class="tab-pane show active"
        id="users-tab-pane"
        role="tabpanel"
        aria-labelledby="users-tab"
        tabindex="0"
      >
        <UsersTab />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
