/*
 * @Description:
 * @Autor: Seven
 * @Date: 2022-02-14 16:02:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-17 11:20:41
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			packages: resolve(__dirname, "./packages"),
		},
	},
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	build:{
		lib: {
			entry: resolve(__dirname, './packages/index.ts'),
			name: 'f-table-plus',
			fileName: (format) => `f-table-plus.${format}.ts`
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				}
			}
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			}
		}
	},
});
