import { Reducer } from "redux";
import { IGlobalInitialState } from "../state/AppState";
import { ActionTypes, GlobalAction } from "../actions/globalActions/ActionTypeGlobal";

const InitialState :IGlobalInitialState = {
    tableData:[],
    tableFilterinUse:false,
    filterList:[],
    filterTags :{
        Alumnos_dados_de_baja:false,
        Alumnos_becados_activos:false,
        Alumnos_activos:false,
        Alumnos_acreditan_banco:false,
        Alumnos_con_fin_de_carrera:false,
        Alumnos_con_año_de_gracia:false,
        Alumnos_sin_cuenta:false,
    },
}

const globalReducer :Reducer<IGlobalInitialState, GlobalAction> = ( state = InitialState, action:GlobalAction)=>{

    switch (action.type){

        case ActionTypes.SET_TABLE_FILTER_IN_USE :{
            return {
                ...state,
                tableFilterinUse: action.state
            }
        }

        case ActionTypes.SET_FILTER_LIST :{
            return {
                ...state,
                filterList: action.filterList
            }
        }

        case ActionTypes.REMOVE_FILTER_TAG: {
            return {
                ...state,
                filterTags: {
                    ...state.filterTags,
                    [action.tag]: false
                }
            }
        }

        case ActionTypes.ADD_FILTER_TAG: {
            return {
                ...state,
                filterTags: {
                    ...state.filterTags,
                    [action.filter]: !state.filterTags[action.filter as keyof Object]
                }
            }
        }

        default: return state
    }

}

export default globalReducer