/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-11 10:02:30
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 13:56:54
 */

import { ElButton } from "element-plus";
import { defineComponent, h } from "vue";
import { reaDataStore } from "../store";
export default defineComponent({
	name: "submitList",
	setup(props, { emit }) {
		const addModel = () => {
			reaDataStore.form = {};
			reaDataStore.modelShow = true;
			emit("modelShow");
		};
		return {
			addModel,
		};
	},
	render() {
		const { addModel } = this;

		const listBntn = () => {
			if (reaDataStore.options&&reaDataStore.options.createBtn) {
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
