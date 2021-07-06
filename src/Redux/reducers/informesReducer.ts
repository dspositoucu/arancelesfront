import { Reducer } from "redux";
import { IInformesInitialState } from "../state/AppState";
import { ActionTypes, InformesAction } from "../actions/informes/ActionTypeInformes";

const InitialState: IInformesInitialState = {
    AllDataInformes: [],
    AllData: [],
    filterTags: {
        Alumnos_dados_de_baja: false,
        Alumnos_becados_activos: false,
        Alumnos_activos: false,
        Alumnos_acreditan_banco: false,
        Alumnos_con_fin_de_carrera: false,
        Alumnos_con_año_de_gracia: false,
        Alumnos_sin_cuenta: false,
    },
}

const InformesReducer: Reducer<IInformesInitialState, InformesAction> = (state = InitialState, action: InformesAction) => {

    switch (action.type) {

        case ActionTypes.GET_ALL_DATA: {
            let data = action.data.sort(data => { if (parseInt(data.CBU) > 0) return -1 })
            return {
                ...state,
                AllDataInformes: data,
                AllData: data
            }
        }

        case ActionTypes.ALUMNOS_BECADOS_ACTIVOS: {
            let table = state.AllData.length ? state.AllData : state.AllDataInformes

            return {
                ...state,
                AllData: action.state
                    ? table.filter(data => data.IDBENEFICIO > 1 && data.BAJA === 0 && data.ACTIVO === 1)
                    : state.AllDataInformes.filter(data => data)
            }
        }

        case ActionTypes.ALUMNOS_ACREDITAN_EN_BANCO: {
            let table = state.AllData.length ? state.AllData : state.AllDataInformes
            return {
                ...state,
                AllData: action.state
                    ? table.filter(data => data.ACREDITABANCO === 1 )
                    : state.AllDataInformes.filter(data => data)
            }
        }

        case ActionTypes.ALUMNOS_DADOS_DE_BAJA : {
            let table = state.AllData.length ? state.AllData : state.AllDataInformes

            return {
                ...state,
                AllData: action.state
                ? table.filter(data => data.BAJA === 1)
                : state.AllDataInformes.filter(data => data.BAJA === 0)
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

export default InformesReducer