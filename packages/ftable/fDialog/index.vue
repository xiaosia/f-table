<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-09 16:14:29
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-18 13:12:42
-->
<template>
	<el-dialog v-model="DialogModel" title="新增/编辑" width="80%">
		<FFrom :model="form" :columns="columns"></FFrom>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="close('cancel')">取消</el-button>
				<el-button type="primary" @click="close('confirm')">确定</el-button>
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
import { fTableReaData } from "../store";
import Finput from "../finput/index.vue";
import FRadio from "../fradio/index.vue";
import FFrom from "../fform/index.vue";
export default defineComponent({
	components: {
		Finput,
		FRadio,
		FFrom,
	},
	setup () {
		let _this = getCurrentInstance();
		let columns = _this.parent.attrs.columns;
		const close = (name) => {
			fTableReaData.changeDialogModel(false)
			_this.parent.emit("confirm", {
				form: fTableReaData.getFromData(),
				name: name
			})
		}
		return {
			columns,
			close,
			...toRefs(fTableReaData),
		};
	},
});
</script>
<style scoped>
.dialog-footer button:first-child {
	margin-right: 10px;
}
</style>
