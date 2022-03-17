/*
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-14 16:02:37
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-17 10:49:36
 */
import { createApp } from 'vue'
import App from './App.vue'
import FTable from '../packages/index'
import router from "./router"
console.log('ftable', FTable)
// createApp(App).mount('#app')


const app = createApp(App)

// app.use(i18n);
app.use(FTable)
app.use(router)
console.log('ftable', FTable)

app.mount('#app')


