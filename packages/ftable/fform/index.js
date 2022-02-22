import { ElForm, ElFormItem } from "element-plus";
import { defineComponent, h, resolveDynamicComponent, toRefs} from "vue";
import Finput from "../finput/index.vue";
import FRadio from "../fradio/index.vue";
import { reaDataStore, fTableReaData} from "../store";
/*
 * @Description: 目前停用
 * @Autor: Seven
 * @Date: 2022-02-18 09:28:25
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 10:37:56
 */
export default defineComponent({
	props: {
		columns: {
			type: Array,
			default: () => [],
		},
	},
    components:{
        Finput,
        FRadio
    },
	setup(props) {
		const componentsList = {
			input: Finput,
			radio: FRadio,
		};

		const mapFromComponents = () => {
			return props.columns.map((item, index) => {
				return h(
					ElFormItem,
					{
						label: item.label,
					},
					{
                        default: () => h(resolveDynamicComponent(item.type ? componentsList[item.type] : "Finput"), {
							modelValue: fTableReaData.form[item.name],
                            'onUpdate:modelValue': (value)=>{
                                fTableReaData.form[item.name] = value
                            },
                            data: item,
                            ...item.bind
						}),
                    }
				);
			});
		};
		return {
			componentsList,
            mapFromComponents,
            ...toRefs(fTableReaData)
		};
	},
	render() {
		const { mapFromComponents, form } = this;
		return h(
			ElForm,
			{
				model: form,
                labelPosition: 'left'
			},
			mapFromComponents()
		);
	},
});
