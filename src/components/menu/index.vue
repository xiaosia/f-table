<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-03-17 10:43:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-17 11:01:14
-->
<template>
	<el-menu
		active-text-color="#ffd04b"
		background-color="#545c64"
        style="height: 100%"
		router
		text-color="#fff"
		@open="handleOpen"
		@close="handleClose"
	>
		<el-menu-item 
			v-for="item in computedMenu"
			:key="item.name"
			:index="item.path">
			<el-icon><icon-menu /></el-icon>
			<span>{{item.meta ? item.meta.name : ''}}</span>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import {
	Location,
	Document,
	Menu as IconMenu,
	Setting,
} from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue"
const router = useRouter();
const menu = router.options.routes;

const computedMenu = computed(() => {
	let menuCom = [];
	for (const iterator of router.options.routes) {
		if (!iterator.meta || iterator.meta.hidden) continue;
		let meunC = {
			...iterator,
		};
		meunC.children = [];
		if(!iterator.children) {
			menuCom.push(meunC);
			continue
		};
		for (const iteratorC of iterator.children) {
			if (!iteratorC.meta || iteratorC.meta.hidden) continue;
			meunC.children.push(iteratorC);
		}
		menuCom.push(meunC);
	}
	return menuCom;
});
console.log('computedMenu', computedMenu)
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>
