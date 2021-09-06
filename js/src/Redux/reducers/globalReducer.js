import { ActionTypes } from "../actions/globalActions/ActionCreatorGlobal";

const InitialState = {
    tableData: [],
    detallesData: {},
    modalRegister: false,
    modalEdit: false,
    tableFilterinUse: false,
    filterList: [],
    loading: false
}

const globalReducer  = (state = InitialState, action ) => {

    switch (action.type) {

        case ActionTypes.FAIL_REQUEST:{
            return{
                ...state
            }
        }

        case ActionTypes.SUCCESS_REQUEST:{
            return {
                ...state
            }
        }

        case ActionTypes.SET_LOADING: {
            return {
                ...state,
                loading: !state.loading
            }
        }

        case ActionTypes.SET_TABLE_FILTER_IN_USE: {
            return {
                ...state,
                tableFilterinUse: action.state
            }
        }

        case ActionTypes.SET_FILTER_LIST: {
            return {
                ...state,
                filterList: action.filterList
            }
        }

        case ActionTypes.SELECT_DATA: {
            return {
                ...state, 
                detallesData: action.selectData,
            }
        }

        case ActionTypes.MODAL_FORM_REGISTER: {
            return {
                ...state,
                modalRegister: !state.modalRegister,
                modalEdit: false,
                detallesData: {}
            }
        }

        case ActionTypes.MODAL_FORM_EDIT: {
            return {
                ...state,
                modalEdit: !state.modalEdit,
                modalRegister: !state.modalRegister,
            }
        }

        default: return state
    }

}

export default globalReducer