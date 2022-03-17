<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-14 16:02:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-17 11:11:24
-->

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, Ref, VNode } from "vue";
import { columnst } from "./columns";
let columns: Array<ColumnsItem> = columnst;
interface ColumnsItem {
	name?: string;
	type?: string;
	width?: string | number;
	position?: string;
	render?: (arg0: { item: any; data: any; h: VNode }) => any;
}

// import { Columns } from ""
const records = ref([
	{
		id: 1,
		name: "小王",
		sex: "男",
		sex2: "女",
	},
	{
		id: 2,
		name: "小徐",
		sex: "男",
		sex2: "女",
	},
	{
		id: 3,
		name: "小虎",
		sex: "男",
		sex2: "女",
	},
	{
		id: 4,
		name: "小昭",
		sex: "男",
		sex2: "女",
	},
	{
		id: 5,
		name: "小拍",
		sex: "男",
		sex2: "女",
	},
]);
const options = ref({
	selection: true,
	rowBtn: true,
	updateHide: true,
	// deleteHide: true,
});

const oncheckBoxChange = (e: any) => {
	console.log("e", e);
};
const onDelectFunc = (event: any) =>{
  console.log("Table: ", event)
}
</script>

<template>
	<f-table
		:columns="columns"
		:data="records"
		:options="options"
		@checkBoxChange="oncheckBoxChange"
    @onDelect="onDelectFunc"
	>
		<template	v-slot:rowBtn="{row}">
			<div>自己的插槽按钮{{row}}</div>
		</template>
	</f-table>
</template>

<style>
</style>
