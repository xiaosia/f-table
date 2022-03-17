import { VNode } from "vue";

/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-22 11:04:56
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-24 15:36:25
 */
interface ColumnsItem {
	name?: string;
	type?: string;
	label?:string;
	width?: string | number;
	position?: string;
	render?: (arg0: { item: any; data: any; h: any }) => any;
}


export const columnst:Array<ColumnsItem> = [
	{
		label: "序号",
		type: "index",
	},
	{
		label: "学号",
		name: "id",
		render: ({item, data, h}) :any => {
			return h("span", item.label);
		},
	},
	{
		label: "姓名",
		name: "name",
		width: '680'
	},
	{
		label: "性别",
		name: "sex",
	},
	{
		label: "性别",
		name: "sex",
		width: '680'
	},
	{
		label: "性别固定列2",
		name: "sex",
		width: '680'
	},
	{
		label: "性别固定列1",
		name: "sex2",
	},
];
