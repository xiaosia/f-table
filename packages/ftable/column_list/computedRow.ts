/*
 * @Description: 计算每一行的方法
 * @Autor: Seven
 * @Date: 2022-02-22 13:24:14
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-22 15:25:31
 */

import Item from "../column_item/index.js";
import { defaultConfig } from "../store"

export const rowTest = (h, columns, data = {}, soltsList = {}) => {
	console.log("columns", columns, data, soltsList);
	let positionLeftArrDom = []; //左右固定列
	let positionRightDom = []; //右侧固定列
    let positionLeft = 0
    let positionRight = 0
	let defaultDom = [];
	let defaultClass = ["list"]; //默认的每行类

	columns.forEach((element, index) => {
		if (!element) return;

		if (element.position && element.position === "left") {
			let styleLeft = {
				[element.position]: `${positionLeft}px`,
                index: '2'         
			};
            let defaultClass = ["f-position", `f-position-${element.position}`, 'list']
            positionLeft = positionLeft + element.width || defaultConfig.defaultWidth
			positionLeftArrDom.push(
				rowDefault(
					h,
					defaultClass,
					data,
					element,
					styleLeft,
					index,
					soltsList,
					columns
				)
			);
			return;
		}
		if (element.position && element.position === "right") {
			let styleLeft = {
				[element.position]: `${positionRight}px`,
                index: '2'      
			};
            let defaultClass = ["f-position", `f-position-${element.position}`, 'list']
            positionRight = positionRight + element.width || defaultConfig.defaultWidth
			positionRightDom.push(
				rowDefault(
					h,
					defaultClass,
					data,
					element,
					styleLeft,
					index,
					soltsList,
					columns
				)
			);
			return;
		}
		let styleLeft = {};
		defaultDom.push(
			rowDefault(
				h,
				defaultClass,
				data,
				element,
				styleLeft,
				index,
				soltsList,
				columns
			)
		);
	});
    console.log("rr", new postionArr('left'))
	return [...positionLeftArrDom, ...defaultDom, ...positionRightDom];
};
class postionArr {
    row: []
    constructor(parameters) {
        console.log('parameters', parameters)
        this[parameters]()
    }
    right(){
        console.log("执行right方法")
    }
    left(){
        console.log("执行left方法")
    }
    default(){
        console.log("执行default方法")
    }
}


/**
 * @description: 每格的默认处理
 * @param {*} h 渲染函数
 * @param {*} defaultClass list的类名
 * @param {*} data  传入的数据
 * @param {*} item  每一行顶的数据
 * @param {*} styleArr 行内样式
 * @param {*} solt 插槽
 * @return {*}
 * @author: Seven
 */
const rowDefault = (
	h,
	defaultClass,
	data,
	item,
	styleArr,
	index,
	soltsList,
	columns
) => {
	return h(
		"td",
		{
			rowspan: 1,
			colspan: 1,
			class: defaultClass,
			width: item.width|| defaultConfig.defaultWidth,
			style: {
				width: item.width || defaultConfig.defaultWidth,
				padding: "20px 0px",
				color: "var(--f-table-column--item--color)",
				borderBottom: "var(--f--table-column--border--bottom)",
				...styleArr,
			},
		},
		[
			item.render
				? item.render(item, data, h)
				: itemDom(
						h,
						Item,
						data,
						data[item.name],
						soltsList[item.name],
						index,
						columns
				  ),
		]
	);
};

/**
 * @description:
 * @param {*} h 渲染函数
 * @param {*} DomCompoents 组件
 * @param {*} data 传入进来的data
 * @param {*} value 单独这一行绑定的数据
 * @param {*} solt 插槽
 * @param {*} index 序号
 * @param {*} columns 这一行的columns值
 * @return {*}
 * @author: Seven
 */
const itemDom = (h, DomCompoents, data, value, solt, index, columns) => {
	return h(DomCompoents, {
		data: data,
		value: value,
		solt: solt,
		index: index,
		columns: columns,
	});
};
// h(Item, {
//     data: $attrs.data,
//     value: $attrs.data[item.name],
//     solt: $attrs.soltsList[item.name],
//     index: $attrs.index,
//     columns: item,
// })
