/*
 * @Description: 数据表
 * @Autor: Seven
 * @Date: 2022-02-14 14:22:01
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 14:27:39
 */

import { ElButton } from "element-plus";
import { defineComponent, h } from "vue";

import { reaDataStore } from "../store";
export default defineComponent({
	setup() {},
	render() {
		return h(
			"ElButton",
			{
				class: "fdatashow",
			},
			[
				h(
					ElButton,
					{
						onClick: () => {
                            console.log('reaDataStore', reaDataStore)
                        },
					},
					"数据"
				),
			]
		);
	},
});
