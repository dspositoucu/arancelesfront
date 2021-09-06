export const ActionTypes = {
    SET_TABLE_FILTER_IN_USE: "SET_TABLE_FILTER_IN_USE",
    SET_FILTER_LIST: "SET_FILTER_LIST",
    SELECT_DATA: "SELECT_DATA",
    MODAL_FORM_REGISTER: "MODAL_FORM_REGISTER",
    MODAL_FORM_EDIT: "MODAL_FORM_EDIT",
    SET_LOADING: "SET_LOADING",
    FAIL_REQUEST: "FAIL_REQUEST",
    SUCCESS_REQUEST: "SUCCESS_REQUEST"
}

export const failRequestAction = (message) => {
    return {
        type: ActionTypes.FAIL_REQUEST,
        message
    }
}
export const successRequestAction = () => {
    return {
        type: ActionTypes.SUCCESS_REQUEST
    }
}
export const globalSetTableFilterinUse = (state) => {
    return {
        type: ActionTypes.SET_TABLE_FILTER_IN_USE,
        state
    }
}
export const globalSetFilterList = (filterList) => {
    return {
        type: ActionTypes.SET_FILTER_LIST,
        filterList
    }
}
export const selectDataAction = (selectData) => {
    return {
        type: ActionTypes.SELECT_DATA,
        selectData
    }
}
export const openModalRegister = () => {
    return {
        type: ActionTypes.MODAL_FORM_REGISTER,
    }
}

export const openModalEdit = () => {
    return {
        type: ActionTypes.MODAL_FORM_EDIT,
    }
}

export const setLoading = () => {
    return {
        type: ActionTypes.SET_LOADING
    }
}
