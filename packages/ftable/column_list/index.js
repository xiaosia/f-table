/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-10 15:24:19
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-01 22:07:05
 */
import { ElButton, ElCheckbox, ElPopconfirm } from "element-plus";
import { computed, defineComponent, h, toRefs, watch } from "vue";
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
		const delectBtn = (item, data) => {
			content.emit('delect', {
				item,
				data
			})
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
		const rowSelectCompute = computed(() => {
			if (!$attrs.checkBoxList || !$attrs.data) return false;
			return $attrs.checkBoxList.indexOf($attrs.data) >= 0 ? true : false;
		});
		const showRow = (item, data) => {
			if (!$attrs.options || !$attrs.options.rowBtn) return;
			let renderList = [];
			if ($attrs.btnSolts) {
				renderList.push(
					$attrs.btnSolts({
						row: $attrs.data,
					})
				);
			}
			if (!$attrs.options.updateHide) {
				renderList.push(
					h(
						ElButton,
						{
							type: "primary",
							onClick: () => updateModel(),
						},
						{ default: () => "修改" }
					)
				);
			}
			if (!$attrs.options.deleteHide) {
				renderList.push(
					h(
						ElPopconfirm,
						{
							title: "你确定要删除它吗",
							onConfirm: () => delectBtn(item, data),
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
					)
				);
			}

			return h("div", {}, renderList);
		};
		const columnsRow = computed(() => {
			let columnsRow = $attrs.columns;
			if (!$attrs.options || !$attrs.options.rowBtn) return columnsRow;
			return [
				...columnsRow,
				{
					position: "right",
					render: ({ item, data, h }) => {
						return showRow(item, data);
					},
				},
			];
		});
		const row = () => {
			if (!$attrs.columns) return [];
			return rowTest(
				h,
				columnsRow.value,
				$attrs.data,
				$attrs.soltsList,
				$attrs.index
			);
		};
		const checkBoxChange = (e) => {
			console.log("e", e, $attrs.index);
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
					style: {
						padding: "20px 10px",
					},
				},
				[
					h(ElCheckbox, {
						label: "",
						modelValue: rowSelectCompute.value,
						onChange: (event) => checkBoxChange(event),
					}),
				]
			);
		};
		return [select(), row()];
	},
});
