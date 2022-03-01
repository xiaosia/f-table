<!--
 * @Description: 单选
 * @Autor: Seven
 * @Date: 2022-02-10 08:44:59
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-01 22:14:32
-->
<template>
	<el-radio-group size="small">
		<el-radio v-for="item in $attrs['data']['option']" :key="item" :label="item.value">{{item.label}}</el-radio>
	</el-radio-group>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
	name: "f-radio",
	setup(props, { attrs }) {
		const radio4 = ref("1");
		return {
			radio4,
		};
	},
});
</script>
