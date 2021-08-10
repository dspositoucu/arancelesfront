import {
    ActionTypes,
    GlobalSetTableInUse,
    GlobalSetFilterList,
    SelectDataActionType,
    OpenModalRegister,
    OpenModalEdit,
    SetLoadingAction,
    FailRequestActionType,
    SuccessRequestActionType
} from "./ActionTypeGlobal";
import { typesModels } from "../../../models";


export const failRequestAction = (message: string): FailRequestActionType => {
    return {
        type: ActionTypes.FAIL_REQUEST,
        message
    }
}

export const successRequestAction = (): SuccessRequestActionType => {
    return {
        type: ActionTypes.SUCCESS_REQUEST
    }
}

export const globalSetTableFilterinUse = (state: boolean): GlobalSetTableInUse => {
    return {
        type: ActionTypes.SET_TABLE_FILTER_IN_USE,
        state
    }
}
export const globalSetFilterList = (filterList: typesModels[]): GlobalSetFilterList => {
    return {
        type: ActionTypes.SET_FILTER_LIST,
        filterList
    }
}
export const selectDataAction = (selectData: any): SelectDataActionType => {
    return {
        type: ActionTypes.SELECT_DATA,
        selectData
    }
}
export const openModalRegister = (): OpenModalRegister => {
    return {
        type: ActionTypes.MODAL_FORM_REGISTER,
    }
}

export const openModalEdit = (): OpenModalEdit => {
    return {
        type: ActionTypes.MODAL_FORM_EDIT,
    }
}

export const setLoading = (): SetLoadingAction => {
    return {
        type: ActionTypes.SET_LOADING
    }
}
