<!--
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-14 16:02:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-17 11:11:14
-->

<script setup lang="ts">
import MenuCom from "@/components/menu/index.vue";
</script>

<template>
	<el-container>
		<el-aside width="200px">
			<MenuCom></MenuCom>
		</el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<style>
#app {
	width: 100%;
	height: 100%;
}
html,
body,
.el-container {
	width: 100%;
	height: 100%;
}
</style>
