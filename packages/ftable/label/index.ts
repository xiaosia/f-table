import { defineComponent, getCurrentInstance, h, computed } from "vue";

import Lists from "../column_list/index.js";
import { defaultConfig } from "../store";
import { rowTest } from "../column_list/computedRow";

/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-22 14:45:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 15:30:10
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
			return columns.map((v, i) => {
				console.log("v", v);
				return {
					...v,
					render: (item, data, h) => {
						console.log("item", item);
						return h("span", item.label);
					},
				};
			});
		});
		return h(
			"table",
			{
				cellpadding: "0",
				cellspacing: "0",
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
				h("tr", [
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
