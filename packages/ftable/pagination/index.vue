<!--
 * @Description: 分页按钮
 * @Autor: Seven
 * @Date: 2022-02-11 11:09:42
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 13:51:55
-->

<template>
	<el-pagination
		v-model:currentPage="page.currentPage"
		v-model:page-size="page.pageSize"
		:page-sizes="[20, 50, 100, 500]"
		small
		layout="total, sizes, prev, pager, next, jumper"
		:total="page.pageTotal"
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
		style="justify-content: flex-end; padding: 10px 0px"
	>
	</el-pagination>
</template>

<script>
import { defineComponent, ref, getCurrentInstance, toRefs, computed } from "vue";
import { reaDataStore } from "../store";
export default defineComponent({
	setup() {
		const _this = getCurrentInstance();
		const page = computed(()=>{
				if(_this.parent.attrs.page){
					reaDataStore.page = _this.parent.attrs.page
				}else{
					reaDataStore.page.pageTotal = reaDataStore.data.length
				}
			return reaDataStore.page

		})
		const handleSizeChange = (val) => {
			reaDataStore.page.pageSize = val
		};
		const handleCurrentChange = (val) => {
			reaDataStore.page.currentPage = val
		};
		return {
			handleSizeChange,
			handleCurrentChange,
			page
		};
	},
});
</script>
