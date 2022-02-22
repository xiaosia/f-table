<!--
 * @Description: 显示label
 * @Autor: Seven
 * @Date: 2022-02-09 11:00:23
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 14:56:25
-->
<template>
	<table cellspacing="0" cellpadding="0" class="ftable_label" ref="table" :style="{ width: width,tableLayout: 'fixed',borderCollapse: 'separate' }">
		<colgroup>
			<col v-if="options.selection">
			<col v-for="(item, index) in columns" :width="item.width || '180px'" />
		</colgroup>
		<tr>
			<td class="ftable_header_label" v-if="options.selection">
				<el-checkbox></el-checkbox>
			</td>
			<td
				v-for="(item, index) in columns"
				:key="index"
				:class="['ftable_header_label', item.position?`f-position f-position-${item.position}`:'']"
				rowspan="1"
				colspan="1"
				:style="{
					width: item.width || '180px',
					[item.position]: '0px'
				}"
			>
				{{ item.label }}
			</td>
			<td class="ftable_header_label" v-if="$parent.$attrs.options &&$parent.$attrs.options.rowBtn">
				操作
			</td>
		</tr>
	</table>
</template>

<script>
import {
	defineComponent,
	getCurrentInstance,
	computed,
	toRefs,
	ref,
	reactive,
} from "vue";
export default defineComponent({
	setup(props, { attrs }) {
		let _this = getCurrentInstance();

		let columns = _this.parent.attrs.columns;
		let options = _this.parent.attrs.options;

		// const width = computed(() => {
		// 	return "100%"
		// 	// return (columns.length + Number(options.rowBtn)) * 180 + "px";
		// });


		const width = "100%"
		return {
			columns,
			width,
			options
		};
	},
});
</script>

<style lang="scss" scoped>

</style>
