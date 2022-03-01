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
## 


## 插槽
放入插槽有两种方法
1.直接放入
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1645521453079-97efdb7e-fde2-4024-8f2e-4c45390529b1.png#clientId=uf965431e-b4cc-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=429&id=uc0c01115&margin=%5Bobject%20Object%5D&name=image.png&originHeight=429&originWidth=1915&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30192&status=done&style=none&taskId=u7e4ea8cb-82b2-4e7c-8544-b120d450775&title=&width=1915)
```vue
<template>
	<f-table :columns="columns" :data="records" :options="options"> 
    <template v-slot:name="{value, row}">
       <el-tag>插槽绑定的值：{{value}}</el-tag>
       <el-tag>这一行的值：{{row}}</el-tag>
    </template>
  </f-table>
</template>
```
2.在columns中放入
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1645521782597-4a25784c-476e-441e-949b-551d3b38793f.png#clientId=uf965431e-b4cc-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=418&id=u9ec00e22&margin=%5Bobject%20Object%5D&name=image.png&originHeight=418&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38504&status=done&style=none&taskId=u7fd226cc-bbb9-45a6-9dd6-4a5259af12b&title=&width=1920)
```javascript
		
{
  	label: "学号",
		name: "id",
		position: 'left',
		render: ({item, data, h}) :any => {
			return h("span", item.label);
		},
	},
```
## 单选框/全选
```vue

<script setup>
  
const options = ref({
  selection: true
})
const oncheckBoxChange = (e: any) =>{
  console.log("e", e)
}

</script>

<template>
<f-table :columns="columns" :data="records" :options="options" @checkBoxChange="oncheckBoxChange"> 
  <template v-slot:name="{value, row}">
    <el-tag>插槽绑定的值：{{value}}</el-tag>
    <el-tag>这一行的值：{{row}}</el-tag>
</template>
</f-table>
</template>

```
目前只支持单页面全选
​

在options中传入selection：true/false 为是否显示勾选框

@checkBoxChange(event)： 钩选checkbox会触发的方法

event: 返回当前表格钩选的数组

## 修改/删除按钮


在options中传入rowBtn为true则展示默认修改和删除

```js
const options = ref({
  rowBtn:true,
})

```
![1646142120(1).png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1646142130793-bca0480a-5e5b-4eb6-a21f-0728e2622b6c.png#clientId=u9b00e20f-f8a9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=929&id=rqNHs&margin=%5Bobject%20Object%5D&name=1646142120%281%29.png&originHeight=929&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33850&status=done&style=none&taskId=u667208e3-2142-46fb-a23f-6d990b18289&title=&width=1920)



### 隐藏修改/删除按钮

在option中传入updateHide为true即可隐藏修改按钮，传入deleteHide为true隐藏删除按钮

```vue
const options = ref({
  selection: true,
  rowBtn:true,
  updateHide: true,
  deleteHide: true
})

```
### 自定义右侧按钮
```vue

<template>
	<f-table>
		<template	v-slot:rowBtn="{row}">
			<div>自己的插槽按钮{{row}}</div>
		</template>
	</f-table>
</template>
```


点击修改会弹出当前修改列

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1646142164362-ea6fc850-4323-4e61-aa27-090512ee54ce.png#clientId=u9b00e20f-f8a9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=907&id=u7ee48cca&margin=%5Bobject%20Object%5D&name=image.png&originHeight=907&originWidth=1898&originalType=binary&ratio=1&rotation=0&showTitle=false&size=37841&status=done&style=none&taskId=ua411a718-8fd3-4fbf-a546-3b521128075&title=&width=1898)
### 删除

点击删除传入


![image.png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1646143860099-169fd738-6686-4409-8bd9-48c81ba27522.png#clientId=u9b00e20f-f8a9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=273&id=u73ff6280&margin=%5Bobject%20Object%5D&name=image.png&originHeight=273&originWidth=487&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11037&status=done&style=none&taskId=ud1044074-fdce-4fd8-b9bb-0643a964527&title=&width=487)

```vue
	<f-table
		:columns="columns"
		:data="records"
		:options="options"
    @onDelect="onDelectFunc"
	>
		<template	v-slot:rowBtn="{row}">
			<div>自己的插槽按钮{{row}}</div>
		</template>
	</f-table>


<script setup>
const onDelectFunc = (event: any) =>{
  console.log("Table: ", event)
}
</script>
```


当点击确定传入onDelect事件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1149753/1646143913526-7f834d9d-247b-45cc-bd34-543b6f6898a0.png#clientId=u9b00e20f-f8a9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=97&id=u983d21e8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=97&originWidth=703&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9137&status=done&style=none&taskId=u9b1d5597-33af-4509-84e0-a032aa231b6&title=&width=703)
