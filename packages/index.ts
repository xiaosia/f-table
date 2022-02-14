/*
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-10 08:59:03
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-14 16:20:53
 */
import FTable from "./ftable/index.vue"

const components = [
    FTable
]


const FtableUI = {
　// install 方法 接收参数app
  install(app:any) {
    console.log('执行一段逻辑', app)
    components.forEach(comp => {
        console.log('comp', comp)
      app.component(comp.name, comp)
    })
  },
}
export default FtableUI