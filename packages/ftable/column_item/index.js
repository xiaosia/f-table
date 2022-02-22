/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-11 09:24:55
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 15:38:43
 */

import { defineComponent, h } from "vue";

export default defineComponent({
	render() {
		const { $attrs } = this;
		if ($attrs.solt) {
			return $attrs.solt({ value: $attrs.value, row: $attrs.data });
		}
		if ($attrs.columns && $attrs.columns.type === "index") {
			return h("span", $attrs.index);
		}
		return h(
			"div",
			{},
			$attrs.data.format ? $attrs.data.format($attrs.value) : $attrs.value
		);
	},
});
