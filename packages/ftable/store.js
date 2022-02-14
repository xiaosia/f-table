/*
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-09 16:21:41
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-11 14:09:16
 */
import { reactive } from "vue"


export  const reaDataStore = reactive({
    modelShow: false,
    form: {
        pointName: ''
    },
    data: [],
    columns: [],
    options:{},
    page:{
        pageTotal: 20,
        pageSize: 20,
        currentPage: 1,
    }
})

