/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-22 11:04:56
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 17:30:20
 */
export const columnst = [
	{
		label: "序号",
		type: "index",
		position: 'left'
	},
	{
		label: "学号",
		name: "id",
		position: 'left',
		render({h}:{
			h: Function
		}) {
			return h('div', '我是columns的render')
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
		position: 'right'
	},
];
