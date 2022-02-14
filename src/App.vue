<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";

const columns = ref([
	{
		label: "序号",
		type: "index",
	},
	{
		label: "学号",
    name: 'id'
	},
	{
		label: "姓名",
    name: "name"
	},
	{
		label: "性别",
    name: "sex"
	}
]);

const records = ref([{
  id: 1,
  name: "小王",
  sex: '男'
}, {
  id: 2,
  name: "小徐",
  sex: '男'
}, {
  id: 3,
  name: "小虎",
  sex: '男'
}, {
  id: 4,
  name: "小昭",
  sex: '男'
},{
  id: 5,
  name: "小拍",
  sex: '男'
}])
const options = ref({})
</script>

<template>
	<f-table :columns="columns" :data="records" :options="options"> </f-table>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
