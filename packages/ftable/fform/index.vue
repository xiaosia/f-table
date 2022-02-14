<!--
 * @Description: form组件
 * @Autor: Seven
 * @Date: 2022-02-10 13:11:02
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-10 13:38:10
-->

<template>
	<el-form :model="model">
		<el-form-item
			v-for="item in columns"
			:label="item.label"
			label-width="180px"
		>
			<component
				:is="item.type ? componentsList[item.type] : 'Finput'"
				v-model="model[item.name]"
				:data="item"
				v-bind="item.bind"
			></component>
		</el-form-item>
	</el-form>
</template>

<script>
import { defineComponent } from "vue";
import Finput from "../finput/index.vue";
import FRadio from "../fradio/index.vue";
export default defineComponent({
	name: "f-form",
	components: {
		Finput,
		FRadio,
	},
	props: {
		columns: {
			type: Array,
			default: () => [],
		},
		model: {
			type: Object,
			default: () => {},
		},
	},
	setup() {
		const componentsList = {
			input: Finput,
			radio: FRadio,
		};

		return {
			componentsList,
		};
	},
});
</script>
