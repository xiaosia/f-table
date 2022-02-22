<!--
 * @Description: 分页按钮
 * @Autor: Seven
 * @Date: 2022-02-11 11:09:42
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-18 13:06:54
-->

<template>
	<el-pagination
		v-if="page"
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
import { defineComponent, ref, getCurrentInstance, computed } from "vue";
export default defineComponent({
	setup() {
		const _this = getCurrentInstance();
		const page = computed(() => {
			if (!_this.parent.attrs.page) return false;
			return _this.parent.attrs.page;
		});
		const handleSizeChange = (val) => {
			_this.parent.emit("size-change", val);
		};
		const handleCurrentChange = (val) => {
			_this.parent.emit("current-change", val);
		};
		return {
			handleSizeChange,
			handleCurrentChange,
			page,
		};
	},
});
</script>
