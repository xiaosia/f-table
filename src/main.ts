/*
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-14 16:02:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 16:24:44
 */
import { createApp } from 'vue'
import App from './App.vue'
import FTable from '../packages/index'

// createApp(App).mount('#app')


const app = createApp(App)

// app.use(i18n);
app.use(FTable)

app.mount('#app')


