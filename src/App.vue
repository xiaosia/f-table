
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import { columnst } from "./columns"
const columns:any = ref(columnst);

const records = ref([{
  id: 1,
  name: "小王",
  sex: '男',
  sex2: '女'
}, {
  id: 2,
  name: "小徐",
  sex: '男',
  sex2: '女'
}, {
  id: 3,
  name: "小虎",
  sex: '男',
  sex2: '女'
}, {
  id: 4,
  name: "小昭",
  sex: '男',
  sex2: '女'
},{
  id: 5,
  name: "小拍",
  sex: '男',
  sex2: '女'
}])
const options = ref({})
</script>

<template>
	<f-table :columns="columns" :data="records" :options="options"> 
    <template v-slot:name="{value, row}">
       <el-tag>插槽绑定的值：{{value}}</el-tag>
       <el-tag>这一行的值：{{row}}</el-tag>
    </template>
  </f-table>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  background-color: rgb(156, 154, 154);
}
html{
  background-color: #eee;
}
</style>
