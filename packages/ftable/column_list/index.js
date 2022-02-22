/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-10 15:24:19
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 15:33:10
 */
import { ElButton, ElCheckbox, ElPopconfirm } from "element-plus";
import { defineComponent, h, toRefs, watch } from "vue";
import Item from "../column_item/index.js";
import FSolts from "../fsolts";
import { fTableReaData } from "../store";
import { rowTest } from "./computedRow";
export default defineComponent({
	components: {
		Item,
		FSolts,
	},
	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
	setup(props, content) {
		const updateModel = () => {
			fTableReaData.form = JSON.parse(JSON.stringify(content.attrs.data));
			fTableReaData.DialogModelOpen();
		};
		const delectBtn = () => {
			console.log("log");
		};
		return {
			updateModel,
			delectBtn,
			...toRefs(fTableReaData),
		};
	},
	render() {
		const { columns, $attrs, options, updateModel, form, delectBtn, $emit } =
			this;
		const showRow = () => {
			if (!$attrs.options || !$attrs.options.rowBtn) return;

			return h(
				"td",
				{
					rowspan: 1,
					colspan: 1,
					class: "list",
				},
				[
					$attrs.btnSolts
						? $attrs.btnSolts({
								row: $attrs.data,
								form: form,
						  })
						: "",
					h(
						ElButton,
						{
							type: "primary",
							onClick: () => updateModel(),
						},
						{ default: () => "修改" }
					),
					h(
						ElPopconfirm,
						{
							title: "你确定要删除它吗",
							onConfirm: () => delectBtn(),
						},
						{
							reference: (props) => {
								return h(
									ElButton,
									{
										type: "danger",
									},
									{ default: () => "删除" }
								);
							},
						}
					),
				]
			);
		};
		const row = () => {
			if (!$attrs.columns) return [];
			return rowTest(h, $attrs.columns, $attrs.data, $attrs.soltsList);
		};
		const checkBoxChange = (e) => {
			console.log("e", e);
			$emit("boxSelect", {
				event: e,
				data: $attrs.data,
			});
		};
		const select = () => {
			if (!$attrs.selection) return;
			return h(
				"td",
				{
					rowspan: 1,
					colspan: 1,
					class: "list",
				},
				[
					h(ElCheckbox, {
						label: "",
						onChange: (event) => checkBoxChange(event),
					}),
				]
			);
		};
		return [select(), row(), showRow()];
	},
});
