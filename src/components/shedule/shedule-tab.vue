<script setup>
import { ref } from 'vue';
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


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
var d = new Date();
var namesArray=['n1','n2','n3','n4']
var statusArray=['1','1','В','Б','Н',]

var udata=
{
  name:'ФИО'
}
var data_index=1;


for (let i = -2; i <= 2; i++) {
 //var date_string=addDays(d,i).toLocaleDateString('ru',{ month:'numeric' , day:'numeric', weekday:"short"})
 //data_index++;
 //udata[date_string]='';
 var date_string=addDays(d,i)//.toLocaleDateString('ru',{ month:'numeric' , day:'numeric', weekday:"short"})
 data_index++;
 udata[date_string]='';
}

var data=[]
  for (const n of namesArray) {
    for (const [key, value] of Object.entries(udata)) {
        if(key==='name'){ udata[key]=n}
        else{
              udata[key] = statusArray[Math.floor(Math.random() * statusArray.length)];
        }
    }
    data.push(structuredClone(udata));
  }
console.log(data)
</script>

<template>
  <DxDataGrid
    :data-source="data"
    :show-borders="true" 
  >
  <DxHeaderFilter :visible="true" />
  </DxDataGrid>
 
</template>
<style scoped>

</style>
