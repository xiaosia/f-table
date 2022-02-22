<!--
 * @Description: form组件
 * @Autor: Seven
 * @Date: 2022-02-10 13:11:02
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-18 11:33:12
-->

<template>
	<el-form :model="model">
		<el-form-item v-for="item in columnsComp" :label="item.label" label-width="180px">
			<component
				:is="item.type ? componentsList[item.type] : 'Finput'"
				v-model="model[item.name]"
				:data="item"
				:form="model"
				:placeholder="item.placeholder || '请输入' + item.label"
				v-bind="item.bind"
			></component>
		</el-form-item>
	</el-form>
</template>

<script>
import { ElDatePicker, ElInput } from "element-plus";
import { defineComponent, computed } from "vue";
import Finput from "../finput/index.vue";
import FRadio from "../fradio/index.vue";
import FDataPicker from "../elcomponents/datetimepick/index.vue"
import Fselect from "../elcomponents/select/index.vue"
export default defineComponent({
	name: "f-form",
	components: {
		Finput,
		FRadio,
		FDataPicker,
		Fselect,
	},
	props: {
		columns: {
			type: Array,
			default: () => [],
		},
		model: {
			type: Object,
			default: () => { },
		},
	},
	setup (props) {
		const componentsList = {
			input: ElInput,
			radio: FRadio,
			picker: FDataPicker,
			select: Fselect
		};
		const columnsComp = computed(() => {
			let colummn = []
			props.columns.forEach((item, index) => {
				if (item.type != 'index') {
					colummn.push(item)
				}
			})
			return colummn
		})
		return {
			componentsList,
			columnsComp,
		};
	},
});
</script>
