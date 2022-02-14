<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-09 10:52:42
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 14:33:03
-->
<template>
	<div class="ftable_contact" ref="ftable_width">
		<SubmitList></SubmitList>
		<Label></Label>
		<Columns></Columns>
		<Pagination></Pagination>
		<FDialog></FDialog>
		<!-- <Datat></Datat> -->
	</div>
</template>

<script>
import { defineComponent, getCurrentInstance} from "vue";
import Label from "./label/index.vue";
import Columns from "./column/index.js";
import SubmitList from "./submitList/index.js";
import FDialog from "./fDialog/index.vue"
import Pagination from "./pagination/index.vue"
import Datat from "./datat/index"
export default defineComponent({
	name: "f-table",
	components: {
		Label,
		Columns,
		SubmitList,
		Pagination,
		FDialog,
		Datat
	},
	setup(props, content){
		const cli = () =>{
			console.log(content)
			console.log(content.attrs)
		}
		return {
			cli
		}
	}
});
</script>

<style lang="scss">
@import "./index.scss";
.ftable_contact {
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	overflow: auto;
	background-color: var(--f--table--bgColor);
}
</style>
