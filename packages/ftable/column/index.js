/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-10 14:52:48
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-25 15:44:27
 */

import {
	defineComponent,
	h,
	getCurrentInstance,
	computed,
	watch,
	toRefs,
	reactive,
} from "vue";
import Lists from "../column_list/index.js";

import { fTableReaData } from "../store";


export default defineComponent({
	components: {
		Lists,
	},
	setup(props, content) {
		let _this = getCurrentInstance();
		let solts = _this.parent.slots;

		const getPointData = (name) => {
			return data[name];
		};
		const width = computed(() => {
			return "100%";
		});

		const reaDataColumnsFrom = reactive({
			upodateFrom: "", //用于更新的数据
			page: {
				pageTotal: 20, //页面总数
				pageSize: 20, //每页个数
				currentPage: 1, //当前页数
			},
		});
		
		return {
			width,
			solts,
			getPointData,
			...toRefs(reaDataColumnsFrom),
		};
	},
	render() {
		const { width, data, solts, columns, page, $parent} = this;
		console.log('parentparentparentparentparent', $parent )
		// datas : 传递进来的data数据
		const datas = computed(() => {
			// 需要一个page
			if (!this.$parent.$attrs.data) return [];
			if(this.$parent.page) {
				return Array.from(this.$parent.$attrs.data).slice(
					(this.$parent.$attrs.page.currentPage - 1) * this.$parent.$attrs.page.pageSize,
					this.$parent.$attrs.page.currentPage * this.$parent.$attrs.page.pageSize
				);
			}
			return Array.from(this.$parent.$attrs.data).slice(
				(page.currentPage - 1) * page.pageSize,
				page.currentPage * page.pageSize
			);
		});
		const computedOptions = computed(() => {
			// computedOptions 用于表格的配置，配置是否需要table上方按钮，删除按钮修改查看按钮
			return this.$parent.$attrs.options;
		});
		const computedColumns = computed(() => {
			return $parent.$attrs.columns;
		});

		const rowClick = (row, data, index) => {
			if(!computedOptions.value.selection){
				$parent.$emit("rowClick", { row, data, index });
			}
		};
		const rowDelect = (row, data, index) => {
			$parent.$emit("rowDelect", { row, data, index });
		};
		const checkBoxList = computed(() =>{
			return $parent.getData('selectRow')
		})
		const checkBoxChange = (event) =>{
			console.log("event", event)
			if(event.event){
				$parent.selfPush('selectRow', event.data)
			}else{
				$parent.selfSplice('selectRow', $parent.selfIndexOf('selectRow', event.data), 1)
			}
			$parent.$emit("checkBoxChange", $parent.getData('selectRow'));
		}

		return h(
			"table",
			{
				cellpadding: "0",
				cellspacing: "0",
				style: {
					width: width,
					"table-layout": "fixed",
					"border-collapse": "separate",
				},
			},
			[
				h("colgroup", [
					computedColumns.value
						? computedColumns.value.map((item, index) => {
								return h("col", {
									width: item.width || '180px',
								});
						  })
						: [],
						computedOptions.value.selection? h("col", {
							width: '180px',
						}): ""
				]),
				datas.value.map((item, index) => {
					return h(
						"tr",
						{
							class: "ftable_column",
							onClick: () => rowClick(item, datas.value, index),
						},
						[
							h(Lists, {
								onBoxSelect: (event) => checkBoxChange(event),
								data: item,
								columns: computedColumns.value,
								btnSolts: solts.rowBtn,
								soltsList: solts,
								index: index + 1,
								options: computedOptions.value,
								selection: computedOptions.value.selection,
								checkBoxList: checkBoxList.value
							}),
						]
					);
				}),
			]
		);
	},
});
