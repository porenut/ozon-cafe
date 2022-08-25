<script setup>
import { ref } from 'vue';
import store from '../../store.js';
import NewUserModal from './new-user-modal.vue';
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxEditing,
  DxPopup,
  DxLookup,
  DxForm,
  DxToolbar,
  DxItem,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
} from 'devextreme-vue/data-grid';

const columns = [
  'id',
  'name',
  'usid',
  'birth_date',
  'phone',
  'comment',
  'department',
];
function onCreate(e) {
  store.addUser(e.key);
}
function onDelete(e) {
  store.deleteUser(e.key.id);
}
</script>

<template>
  <DxDataGrid
    :data-source="store.users"
    :show-borders="true"
    :key-expr="id"
    @row-inserted="onCreate"
    @row-removed="onDelete"
  >
    <DxHeaderFilter :visible="true" />

    <DxHeaderFilter :allow-search="true" />
    <DxEditing
      :allow-updating="true"
      :allow-adding="true"
      :allow-deleting="true"
      :use-icons="true"
      mode="popup"
    >
      <DxPopup :show-title="true" title="Данные сотрудника" />
      <DxForm>
        <DxItem data-field="name" />
        <DxItem data-field="usid" />
        <DxItem data-field="phone" />
      </DxForm>
    </DxEditing>

    <DxColumn data-field="name" caption="ФИО" />
    <DxColumn data-field="usid" caption="usid" />
    <DxColumn data-field="phone" caption="Телефон" />

    <DxColumn type="buttons">
      <DxButton name="edit" />
      <DxButton name="delete" />
    </DxColumn>
    <DxToolbar>
      <DxItem location="before" name="addRowButton" />
    </DxToolbar>
  </DxDataGrid>
</template>
