/*
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-02-09 16:21:41
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-18 10:24:13
 */
import { reactive } from "vue"


export const reaDataStore = reactive({
    modelShow: false,
    form: {
        pointName: ''
    },
    data: [],
    columns: [],
    options: {},
    page: {
        pageTotal: 20,
        pageSize: 20,
        currentPage: 1,
    }
})

export const fTableReaData = reactive({
    DialogModel: false,
    form: {},
    changeDialogModel: (event) => {
        fTableReaData.DialogModel = event || !fTableReaData.DialogModel
    },
    DialogModelClose: () => {
        fTableReaData.DialogModel = false
    },
    DialogModelOpen: () => {
        fTableReaData.DialogModel = true
    },
    getFromData: () => {
        return fTableReaData.form
    },
    setFromData: (data) => {
        fTableReaData.form = data
    }
})


export const setFormValue = (value, name) => {
    fTableReaData.form[name] = value
}