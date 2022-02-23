/*
 * @Description: 导出form组件和table组件
 * @Autor: Seven
 * @Date: 2022-02-10 08:59:03
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-23 16:29:19
 */
import FTable from "./ftable/index.vue"
import FFrom from "./ftable/fform/index.vue"
const components = [
    FTable,
    FFrom
]


const FtableUI = {
  install(app:any) {
    components.forEach(comp => {
      app.component(comp.name, comp)
    })
  },
}
export default FtableUI
