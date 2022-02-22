<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-09 10:52:42
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 15:02:35
-->
<template>
	<div class="ftable_contact f_table" ref="ftable_width">
		<SubmitList></SubmitList>
		<div class="ftable_contact_table">
			<Label></Label>
			<Columns></Columns>
		</div>
		<Pagination></Pagination>
		<FDialog></FDialog>
	</div>
</template>

<script>
import {
	defineComponent,
	getCurrentInstance,
	reactive,
	toRef,
	toRefs,
} from "vue";
import { fTableReaData } from "./store";
import Label from "./label/index";
import Columns from "./column/index.js";
import SubmitList from "./submitList/index.js";
import FDialog from "./fDialog/index.vue";
import Pagination from "./pagination/index.vue";
import Datat from "./datat/index";
export default defineComponent({
	name: "f-table",
	components: {
		Label,
		Columns,
		SubmitList,
		Pagination,
		FDialog,
		Datat,
	},
	setup(props, content) {
		return {
			...toRefs(fTableReaData),
		};
	},
});
</script>

<style lang="scss">
@import "./index.scss";
.ftable_contact {
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	background-color: var(--f--table--bgColor);
}
.ftable_contact_table {
	box-sizing: border-box;
	overflow-x: auto;
	width: 100%;
}
</style>
