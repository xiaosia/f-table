/*
 * @Description: 状态管理
 * @Autor: Seven
 * @Date: 2022-02-09 16:21:41
 * @LastEditors: Seven
 * @LastEditTime: 2022-02-25 15:39:16
 */
import { reactive } from "vue"


/**
 * @description: 默认配置
 * @author: Seven
 */
export const defaultConfig = reactive({
    defaultWidth: 180 //默认宽度为180px
})

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
export const FtableData = () =>{
    let reaData = reactive({
        DialogModel: false,
        form: {},
        selectRow: []
    })
    const getData = (name) =>{
        console.log('reaData[name]', reaData[name])
        return reaData[name]
    }
    const setData = (name, value) =>{
        reaData[name] = value
    }
    return {
        getData,
        setData,
        changeDialogModel: (event) => {
            reaData.DialogModel = event || !reaData.DialogModel
        },
        DialogModelClose: () => {
            reaData.DialogModel = false
        },
        DialogModelOpen: () => {
            reaData.DialogModel = true
        },
        getFromData: () => {
            return reaData.form
        },
        setFromData: (data) => {
            reaData.form = data
        },
        selfPush: (name, value)=>{
            reaData[name].push(value)
        },
        selfSplice: (name, ...arg) =>{
            reaData[name].splice(...arg)
        },
        selfIndexOf: (name, value) =>{
            return reaData[name].indexOf(value)
        },
        selfClear: (name) =>{
            reaData[name] = []
        }
    }
}
export const fTableReaData = reactive({
    DialogModel: false,
    form: {},
    selectRow: [],
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
    },
    selfPush: (name, value)=>{
        fTableReaData[name].push(value)
    },
    selfSplice: (name, ...arg) =>{
        fTableReaData[name].splice(...arg)
    },
    selfIndexOf: (name, value) =>{
        return fTableReaData[name].indexOf(value)
    },
    selfClear: (name) =>{
        fTableReaData[name] = []
    }
})


export const setFormValue = (value, name) => {
    fTableReaData.form[name] = value
}