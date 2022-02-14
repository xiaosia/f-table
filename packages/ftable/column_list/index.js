/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-10 15:24:19
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 15:32:34
 */
import { ElButton, ElPopconfirm } from "element-plus";
import { defineComponent, h, toRefs, watch } from "vue";
import Item from "../column_item/index.js";
import FSolts from "../fsolts";
import { reaDataStore } from "../store";

export default defineComponent({
	components: {
		Item,
		FSolts,
	},
	props: {
		item: {
			type: Object,
			default: () => {},
		}
	},
	setup(props, content) {
		const updateModel = () => {
			reaDataStore.form = JSON.parse(JSON.stringify(content.attrs.data));
			reaDataStore.modelShow = true;
		};
		console.log('list_content', content)
		const delectBtn = () => {
			console.log("log");
		};
		return {
			updateModel,
			delectBtn,
			...toRefs(reaDataStore),
		};
	},
	render() {
		const { columns, $attrs, options, updateModel, form, delectBtn } = this;
		console.log("list", this)
		const showRow = () => {
			if (options.rowBtn) {
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
			}
		};
		const row = () => {
			if(!$attrs.columns) return []
			return $attrs.columns.map((v, index) => {
				return h(
					"td",
					{
						rowspan: 1,
						colspan: 1,
						class: "list",
						width: v.width,
						style: {
							width: v.width,
							padding: "20px 0px",
							color: "var(--f-table-column--item--color)",
							borderBottom: "var(--f--table-column--border--bottom)",
						},
					},
					[
						v.render
							? v.render(v, $attrs.data, h)
							: h(Item, {
									data: $attrs.data,
									value: $attrs.data[v.name],
									solt: $attrs.soltsList[v.name],
									index: $attrs.index,
									columns: v
							  }),
					]
				);
			});
		};
		// return [row(), showRow()];
		return [row(), showRow()];
	},
});
