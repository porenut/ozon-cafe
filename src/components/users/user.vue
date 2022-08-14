<script setup>
import { ref } from 'vue';

defineProps({
  id:Number,
  usid: String,
  name: String,
  phone: String,
});
</script>

<template>
  <td>
    {{ name }}
  </td>
  <td>{{ usid }}</td>
  <td>{{ phone }}</td>
  <td>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">Удалить</button>
      <button type="button" class="btn btn-success">Изменить</button>
    </div>
  </td>
</template>
