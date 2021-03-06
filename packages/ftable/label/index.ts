import { defineComponent, getCurrentInstance, h, computed } from "vue";

import Lists from "../column_list/index.js";
import { defaultConfig } from "../store";

/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-22 14:45:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-01 22:14:23
 */
export default defineComponent({
	setup() {
		let _this = getCurrentInstance();

		let columns: any = _this.parent.attrs.columns;
		let options = _this.parent.attrs.options;
		let parentData = _this.parent.attrs.data;
		// const width = computed(() => {
		// 	return "100%"
		// 	// return (columns.length + Number(options.rowBtn)) * 180 + "px";
		// });

		const width = "100%";
		return {
			columns,
			width,
			options,
			parentData,
		};
	},
	render() {
		const { columns, width, options, parentData, $parent } = this;
		const domCol = computed(() => {
			let columnsCopy = [...columns];
			columnsCopy = columnsCopy.map((v, i) => {
				return {
					...v,
					render: ({ item, data, h }) => {
						return h("span", item.label);
					},
				};
			});
			if (options && options.rowBtn) {
				columnsCopy.push({
					position: 'right',
					render: ({ item, data, h }) => {
						return h("span", "操作");
					},
				});
			}
			return columnsCopy;
		});
		const checkBoxChange = ({ event }) => {
			if (event) {
				for (const iterator of parentData) {
					$parent.selfPush("selectRow", iterator);
				}
				$parent.$emit("checkBoxChange", $parent.getData("selectRow"));

				return;
			}
			$parent.selfClear("selectRow");
			$parent.$emit("checkBoxChange", $parent.getData("selectRow"));
		};
		return h(
			"table",
			{
				cellpadding: "0",
				cellspacing: "0",
				class: "ftable_label",
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
				h(
					"tr",
					{
						class: "ftable_column",
					},
					[
						h(Lists, {
							data: {
								sex: "名字",
							},
							onBoxSelect: (event) => checkBoxChange(event),
							columns: domCol.value,
							selection: options.selection,
							btnSolts: {},
							index: 1,
							options: {},
						}),
					]
				),
			]
		);
	},
});
