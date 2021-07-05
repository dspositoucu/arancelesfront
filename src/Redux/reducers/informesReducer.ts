import { Reducer } from "redux";
import { IInformesInitialState } from "../state/AppState";
import { ActionTypes, InformesAction } from "../actions/informes/ActionTypeInformes";

const InitialState :IInformesInitialState = {
    AllDataInformes:[],
    filterTags:{}
}

const InformesReducer :Reducer<IInformesInitialState, InformesAction> = ( state = InitialState, action:InformesAction)=>{

    switch (action.type){

        case ActionTypes.GET_ALL_DATA :{
            return {
               ...state,
               AllDataInformes:action.data
            }
        }

        case ActionTypes.BECADOS_ACTIVOS :{
            return {
                ...state,
                AllDataInformes: state.AllDataInformes.filter(data=> data.IDBENEFICIO>1)
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