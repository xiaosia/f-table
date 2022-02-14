<!--
 * @Description: 显示label
 * @Autor: Seven
 * @Date: 2022-02-09 11:00:23
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 13:48:17
-->
<template>
	<table class="ftable_label" ref="table" :style="{ width: width }">
		<colgroup>
			<col v-for="(item, index) in columns" :width="item.width" />
		</colgroup>
		<tr>
			<td
				v-for="(item, index) in columns"
				:key="index"
				class="ftable_header_label"
				rowspan="1"
				colspan="1"
				:style="{
					width: item.width,
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
		};
	},
});
</script>

<style lang="scss" scoped>
.ftable_label {
	width: 100%;
	font-weight: 600;
	color: #909399;
	padding: 10px 0px;
	table-layout: fixed;
	border-collapse: separate;
	border-bottom: var(--f--table-column--border--bottom);
	tr {
		width: 100%;
		.ftable_header_label {
			// width: var(--f-table-columns--item);
		}
		& > .ftable_header_label:last-child {
			min-width: var(--f-table-columns--item);
		}
	}
}
.ftable_header_label {
	// width: var(--f-table-columns--item);
}
.label_text {
	display: flex;
	justify-content: space-between;
	font-weight: 600;
	color: #909399;
}
</style>
