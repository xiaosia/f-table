import { defineComponent, getCurrentInstance, h, computed } from "vue";

import Lists from "../column_list/index.js";
import { defaultConfig } from "../store";
import { rowTest } from "../column_list/computedRow";
import { ElCheckbox } from "element-plus";

/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-22 14:45:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-24 15:33:04
 */
export default defineComponent({
	setup() {
		let _this = getCurrentInstance();

		let columns: any = _this.parent.attrs.columns;
		let options = _this.parent.attrs.options;

		// const width = computed(() => {
		// 	return "100%"
		// 	// return (columns.length + Number(options.rowBtn)) * 180 + "px";
		// });

		const width = "100%";
		return {
			columns,
			width,
			options,
		};
	},
	render() {
		const { columns, width, options } = this;
		const domCol = computed(() => {
			console.log('options', options)
			let columnsCopy = [...columns]
			columnsCopy = columnsCopy.map((v, i) => {
				return {
					...v,
					render: ({item, data, h}) => {
						return h("span", item.label);
					},
				};
			});
			if(options && options.selection){
				console.log("item", columnsCopy)
				columnsCopy = [{
					label: "序号",
					type: 'checkbox',
					render: ({item, data, h}) =>{
						return h(ElCheckbox, {
							label: "",
						})
					},
				}, ...columnsCopy]
				console.log("item", columnsCopy)
			}
			return columnsCopy
		});
		return h(
			"table",
			{
				cellpadding: "0",
				cellspacing: "0",
				class: 'ftable_label',
				style: {
					width: width,
					"table-layout": "fixed",
					"border-collapse": "separate",
				},
			},
			[
				h("colgroup", [
					columns
						? columns.map((item, index) => {
								return h("col", {
									width: item.width || `${defaultConfig.defaultWidth}px`,
								});
						  })
						: [],
				]),
				h("tr", {
					class: 'ftable_column'
				},[
					h(
						Lists,
						{
							data: {
								sex: "名字",
							},
							columns: domCol.value,
							btnSolts: {},
							index: 1,
							options: {},
						},
						[h("div", 123)]
					),
				]),
			]
		);
	},
});
