<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-09 16:14:29
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-10 13:16:03
-->
<template>
	<el-dialog v-model="modelShow" title="新增/编辑" width="30%">
		<FFrom :model="form" :columns="columns"></FFrom>
		<!-- <el-form :model="form">
			<el-form-item
				v-for="item in columns"
				:label="item.label"
				label-width="180px"
			>
				<component
					:is="item.type ? componentsList[item.type] : 'Finput'"
					v-model="form[item.name]"
					:data="item"
					v-bind="item.bind"
				></component>
			</el-form-item>
		</el-form> -->

		<template #footer>
			<span class="dialog-footer">
				<el-button @click="modelShow = false">Cancel</el-button>
				<el-button type="primary" @click="confirm">Confirm</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script>
import {
	defineComponent,
	ref,
	toRefs,
	getCurrentInstance,
	nextTick,
} from "vue";
import { ElMessageBox } from "element-plus";
import { reaDataStore } from "../store";
import Finput from "../finput/index.vue";
import FRadio from "../fradio/index.vue";
import FFrom from "../fform/index.vue";
export default defineComponent({
	components: {
		Finput,
		FRadio,
		FFrom,
	},
	setup() {
		let _this = getCurrentInstance();
		let columns = _this.parent.attrs.columns;
		const confirm = () => {
			reaDataStore.modelShow = false;
			reaDataStore.form = {};
		};
		const componentsList = {
			input: Finput,
			radio: FRadio,
		};
		return {
			columns,
			confirm,
			componentsList,
			...toRefs(reaDataStore),
		};
	},
});
</script>
<style scoped>
.dialog-footer button:first-child {
	margin-right: 10px;
}
</style>
