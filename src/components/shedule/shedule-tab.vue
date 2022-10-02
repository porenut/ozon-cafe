<script setup>
import { ref ,reactive, onMounted } from 'vue';
import store from '../../store.js';
import {
  DxDataGrid,
  DxButton,
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
  DxSimpleItem,
} from 'devextreme-vue/data-grid';
import DxDateBox from 'devextreme-vue/date-box';
var dateStart;
var dateEnd;
var sd=addDays(new Date(),-4);
var ed=addDays(new Date(),4);

function addDays(date, days){
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
}
onMounted(() => {
  dateStart=addDays(new Date(),-4).toLocaleDateString();
  //console.log(sDatePickerVal)
  dateEnd=addDays(new Date(),4).toLocaleDateString();
  loadSchedule();
})


function loadSchedule()
{
  //sdata=[];
  store.loadSchedule({
    's':dateStart,
    'e':dateEnd});
    console.log(store)
}
function onDateStartChanged(e){
  dateStart=e.value.toLocaleDateString();
  loadSchedule();
}
function onDateEndChanged(e){
  dateEnd=e.value.toLocaleDateString();
  loadSchedule();
}
function onUpdate(e) {
  console.log(e);
}

function overrideOnValueChanged(e) {
  let val = e
  let standardHandler = e.editorOptions.onValueChanged;
    e.editorOptions.onValueChanged = function(e) {
      console.log(val)
      store.setUserSchedule(val.row.data.id,val.name,e.value);

    standardHandler(e);
  }
}

</script>

<template>
<div class="dx-fieldset">
      <div class="dx-field">
        <div class="dx-field-label">Начало периода</div>
        <div class="dx-field-value">
          <DxDateBox
            :value="sd"
            type="date"
            @value-changed="onDateStartChanged"
          />
        </div>
      </div>
      <div class="dx-field">
        <div class="dx-field-label">Конец периода</div>
        <div class="dx-field-value">
          <DxDateBox
            :value="ed"
            type="date"
            @value-changed="onDateEndChanged"
          />
        </div>
      </div>
</div>
  <DxDataGrid
    :data-source="store.schedule"
    :show-borders="true" 
    
    
    @editor-preparing="overrideOnValueChanged"
  >
 
  <DxEditing
        :allow-updating="true"
        mode="cell"
      />
      <DxPaging :enabled="false"/>
    <DxScrolling column-rendering-mode="virtual"/>
  <DxColumn
        data-field="name"
        caption="ФИО"/>
  <DxColumn
        v-for="day in store.scheduleDays"
        
        :data-field=day
        :caption="(new Date(day)).toLocaleDateString('ru-RU',{/*weekday: 'none',*/month: 'numeric', day: 'numeric'})"
        
      >
        <DxLookup
          :data-source="store.statuses"
          value-expr="status"
          display-expr="status"
        />
      </DxColumn>
       
    
  </DxDataGrid>
 
</template>
<style scoped>

</style>
