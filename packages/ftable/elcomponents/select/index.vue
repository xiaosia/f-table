<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-18 11:05:03
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-18 11:20:28
-->
<template>
	<el-select @focus="childrenFocus">
		<el-option
			v-for="item in options"
			:key="$attrs.data.keyName ? item[$attrs.data.keyName] : item.id"
			:label="$attrs.data.keyLabel ? item[$attrs.data.keyLabel] : item.label"
			:value="value(item)"
		></el-option>
	</el-select>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { setFormValue } from "../../store.js"
export default defineComponent({
	name: "",
	setup (props, { attrs }) {
		const options = ref([])
		const setValue = (value) => {
			options.value = value
		}
		// new Promise((resolve, reject) => {
		// 	if (attrs.options) {
		// 		resolve(attrs.options({
		// 			form: attrs.form,
		// 			setValue: setValue
		// 		}))
		// 	} else {
		// 		resolve([])
		// 	}
		// }).then((res) => {
		// 	options.value = res
		// })
		const value = (item) => {
			if (attrs.value) {
				return attrs.value(item)
			}
			return item.value
		}
		const childrenFocus = () => {
			console.log('focus', attrs)
			if (!attrs.data.children) return
			setOptions()
		}

		const setOptions = () => {
			new Promise((resolve, reject) => {
				if (attrs.options) {
					resolve(attrs.options({
						form: attrs.form,
						setValue: setValue
					}))
				} else {
					resolve([])
				}
			}).then((res) => {
				options.value = res
			})
		}
		setOptions()
		return {
			options,
			value,
			childrenFocus
		}
	}
});
</script>
