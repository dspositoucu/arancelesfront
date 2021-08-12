import { Reducer } from 'redux';
import { CtacteActions, ActionTypes } from '../actions/ctacte/CtacteActionTypes'
import { ICtacteInitialState } from '../state/AppState';

const InitialState: ICtacteInitialState = {
    ctacte: [],
    totalDebe: "",
    totalHaber: "",
    total: "",
    previous: {},
    configForm: {}
}

const ctacteReducer: Reducer<ICtacteInitialState, CtacteActions> = (state = InitialState, action: CtacteActions) => {

    switch (action.type) {
        case ActionTypes.RESET_CONFIG : {
            return {
                ...state,
                configForm:{},
                ctacte:[]
            }
        }

        case ActionTypes.GET_ALL_CTACTE: {
            return {
                ...state,
                configForm: action.listCtacte[0],
                ctacte: action.listCtacte,
                total: action.listCtacte.reduce((acc, curr) => { return acc + (curr["debe"] - curr["haber"]) }, 0),
                totalDebe: action.listCtacte.reduce((acc, curr) => { return acc + curr["debe"] }, 0),
                totalHaber: action.listCtacte.reduce((acc, curr) => { return acc + curr["haber"] }, 0)
            }
        }

        case ActionTypes.EDIT_MODE: {
            return {
                ...state,
                ctacte: state.ctacte.map(mov => {
                    if (mov.id === action.idMov) return { ...mov, isEditMode: !mov.isEditMode }
                    if (mov.isEditMode && mov.id !== action.idMov) return { ...mov, isEditMode: false }
                    return mov
                }),
                previous: state.ctacte.filter(mov => mov.id === action.idMov)[0]
            }
        }

        case ActionTypes.REVERTIR: {
            return {
                ...state,
                ctacte: state.ctacte.map(mov => {
                    if (mov.id === state.previous.id) return { ...state.previous, isEditMode: !mov.isEditMode }
                    if (mov.isEditMode) return { ...mov, isEditMode: false }
                    return mov
                }),
            }
        }

        case ActionTypes.ACTUALIZAR: {
            return {
                ...state,
                ctacte: state.ctacte.map(mov => {
                    if (mov.id === action.newData.id) return { ...mov, ...action.newData }
                    if (mov.isEditMode) return { ...mov, isEditMode: false }
                    return mov
                })
            }
        }

        default: return state;
    }
}
export default ctacteReducer