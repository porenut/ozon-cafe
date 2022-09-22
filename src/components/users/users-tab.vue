<script setup>
import { ref } from 'vue';
import store from '../../store.js';
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
  DxButton,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
  DxSimpleItem,
  DxCheckBox,
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
function onUpdate(e) {
  store.updateUser(e.key);
}
function onDelete(e) {
  store.deleteUser(e.key.id);
}
</script>

<template>
  <DxDataGrid
    :data-source="store.users"
    :show-borders="true"
    :columnAutoWidth="true"
    :allow-column-resizing="true"
    @row-inserted="onCreate"
    @row-updated="onUpdate"
    @row-removed="onDelete"
  >
    <DxHeaderFilter :visible="true" />

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
        <DxItem data-field="us_id" />
        <DxItem data-field="phone" />
        <DxItem data-field="active" editor-type="dxCheckBox"/>
        <DxItem data-field="comment" />
        <DxItem data-field="default_status_id" />
        <DxItem data-field="birth_date" editor-type="dxDateBox" />
      </DxForm>
    </DxEditing>

    <DxColumn data-field="name" caption="ФИО" />

    <DxColumn data-field="phone" caption="Телефон" />
    <DxColumn data-field="us_id" caption="usid" :visible="false" />
    <DxColumn data-field="active" caption="Активен" :visible="false" />
    <DxColumn data-field="comment" caption="Коментарий" :visible="false" />
    <DxColumn
      data-field="birth_date"
      caption="Дата рождения"
      :visible="false"
    />
    <DxColumn data-field="default_status_id" caption="Статус по умолчанию">
      <DxLookup
        :data-source="store.statuses"
        value-expr="id"
        display-expr="description"
      />
    </DxColumn>

    <DxColumn type="buttons">
      <DxButton name="edit" />
      <DxButton name="delete" />
    </DxColumn>
    <DxToolbar>
      <DxItem location="before" name="addRowButton" />
    </DxToolbar>
  </DxDataGrid>
</template>
