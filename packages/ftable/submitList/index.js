/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-11 10:02:30
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-17 11:16:27
 */

import { ElButton } from "element-plus";
import { defineComponent, h } from "vue";
import { fTableReaData } from "../store";
export default defineComponent({
	name: "submitList",
	setup(props, { emit }) {
		const addModel = () => {
			fTableReaData.DialogModelOpen()
		};
		return {
			addModel,
		};
	},
	render() {
		const { addModel, $parent } = this;
		const listBntn = () => {
			if ($parent.$attrs.options&&$parent.$attrs.options.createBtn) {
				return h(
					ElButton,
					{
						type: "primary",
						onClick: () => addModel(),
					},
					{
						default: () => "新增",
					}
				);
			}
		};
		return h("div", {}, [listBntn()]);
	},
});
