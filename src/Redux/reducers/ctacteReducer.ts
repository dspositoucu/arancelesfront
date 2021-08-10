import { Reducer } from 'redux';
import { CtacteActions, ActionTypes } from '../actions/ctacte/CtacteActionTypes'
import { ICtacteInitialState } from '../state/AppState';

const InitialState: ICtacteInitialState = {
    ctacte:[],
    totalDebe:"",
    totalHaber:"",
    total:""
}

const ctacteReducer: Reducer<ICtacteInitialState, CtacteActions> = (state = InitialState, action: CtacteActions) => {

    switch (action.type) {
        case ActionTypes.GET_ALL_CTACTE :{
            return {
                ...state,
                ctacte: action.listCtacte,
                total: action.listCtacte.reduce((acc,curr) => {return acc + (curr["debe"]-curr["haber"]) }, 0),
                totalDebe:action.listCtacte.reduce((acc,curr) => {return acc + curr["debe"] }, 0),
                totalHaber:action.listCtacte.reduce((acc,curr) => {return acc + curr["haber"] }, 0)
            }
        }

        default: return state;
    }
}
export default ctacteReducer