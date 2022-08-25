<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#addUserModal"
  >
    Добавить
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="addUserModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавить сотрудника</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">ФИО</label>
              <div class="col-sm-10">
                <input
                  v-model="nameInput"
                  type="text"
                  class="form-control"
                  id="inputName"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Телефон</label>
              <div class="col-sm-10">
                <input
                  v-model="phoneInput"
                  type="text"
                  class="form-control"
                  id="inputPhone"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="addUser"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            ОК
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import store from '../../store.js';

const nameInput = ref('');
const phoneInput = ref('');

function addUser() {
  const data = {
    name: nameInput.value,
    phone: phoneInput.value,
  };
  store.addUser(data);
  nameInput.value = '';
  phoneInput.value = '';
}
</script>
