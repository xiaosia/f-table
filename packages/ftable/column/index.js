/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-10 14:52:48
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 15:33:26
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
import { reaDataStore } from "../store";

export default defineComponent({
	components: {
		Lists,
	},
	setup(props, content) {
		console.log('content', content)
		let _this = getCurrentInstance();
		reaDataStore.options = _this.parent.attrs.options;
		reaDataStore.columns = getCurrentInstance().parent.attrs.columns;
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
			...toRefs(reaDataStore),
			...toRefs(reaDataColumnsFrom),
		};
	},
	render() {
		const { width, data, solts, columns, page, $parent } = this;

		// datas : 传递进来的data数据
		const datas = computed(() => {
			// 需要一个page
			if (!this.$parent.$attrs.data) return [];
			reaDataStore.data = this.$parent.$attrs.data;
			return Array.from(this.$parent.$attrs.data).slice(
				(page.currentPage - 1) * page.pageSize,
				page.currentPage * page.pageSize
			);
		});
		const computedOptions = computed(() => {
			// computedOptions 用于表格的配置，配置是否需要table上方按钮，删除按钮修改查看按钮
			return this.$parent.$attrs.options;
		})
		const computedColumns = computed(()=>{
			return $parent.$attrs.columns
		})

		const computedFrom = () => {};
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
									width: item.width,
								});
						  })
						: [],
				]),
				h("tr", {
					class: "ftable_column",
				}),
				datas.value.map((item, index) => {
					return h(
						"tr",
						{
							class: "ftable_column",
						},
						[
							h(Lists, {
								data: item,
								columns: computedColumns.value,
								btnSolts: solts.rowBtn,
								soltsList: solts,
								index: index + 1,
							})
						]
					);
				}),
			]
		);
	},
});
