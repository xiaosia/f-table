# Vue 3 CRUD模板

## 描述：

对element plus的组件进行二次封装， 能完成快速表格操作

## 基本用法


基本用法
​

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1645498885221-3666d271-7dbc-4a63-a2e4-eac696e6994d.png#clientId=ubd2e26da-3747-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=435&id=u2a472604&margin=%5Bobject%20Object%5D&name=image.png&originHeight=435&originWidth=1138&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9581&status=done&style=none&taskId=ua730c51e-c8e8-4598-8648-44a1cf9304f&title=&width=1138)
```vue
<script setup lang="ts">
import { ref } from "vue";

const columns = ref([
	{
		label: "序号",
		type: "index",
	},
	{
		label: "学号",
    name: 'id'
	},
	{
		label: "姓名",
    name: "name"
	},
	{
		label: "性别",
    name: "sex"
	}
]);

const records = ref([{
  id: 1,
  name: "小王",
  sex: '男'
}, {
  id: 2,
  name: "小徐",
  sex: '男'
}, {
  id: 3,
  name: "小虎",
  sex: '男'
}, {
  id: 4,
  name: "小昭",
  sex: '男'
},{
  id: 5,
  name: "小拍",
  sex: '男'
}])
const options = ref({})
</script>

<template>
	<f-table :columns="columns" :data="records" :options="options"> </f-table>
</template>

```
通过传入columns来设置每一行字段， data为数据， options为表格配置
​

## 表格固定列


![image.png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1645518376744-bd679dd0-1255-4fe3-b336-36e9291a39a9.png#clientId=ubd2e26da-3747-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=397&id=uad7e98ea&margin=%5Bobject%20Object%5D&name=image.png&originHeight=397&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13302&status=done&style=none&taskId=ube8ab7a4-4b63-4374-a89f-f2d95d35933&title=&width=1920)
通过在columns中添加字段  position 来设置固定列

- left： 左侧固定列
- right： 右侧固定列



```javascript
export const columns = [
	{
		label: "序号",
		type: "index",
		position: 'left'
	},
	{
		label: "学号",
		name: "id",
		position: 'left'
	},
	{
		label: "姓名",
		name: "name",
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

```


## 固定表头

## 分页


## 插槽
​

​

