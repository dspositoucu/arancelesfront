import { Reducer } from 'redux';
import { CtacteActions, ActionTypes } from '../actions/ctacte/CtacteActionTypes'
import { ICtacteInitialState } from '../state/AppState';

const InitialState: ICtacteInitialState = {
    ctacte: [],
    totalDebe: "",
    totalHaber: "",
    saldoTotal: "",
    previous: {},
    configForm: {}
}

const ctacteReducer: Reducer<ICtacteInitialState, CtacteActions> = (state = InitialState, action: CtacteActions) => {

    switch (action.type) {
        case ActionTypes.RESET_CONFIG: {
            return {
                ...state,
                configForm: {},
                ctacte: []
            }
        }

        case ActionTypes.GET_ALL_CTACTE: {
            let saldomov = 0
            let saldoTotal = action.listCtacte.reduce((acc, curr) => { return acc + (curr["debe"] - curr["haber"]) }, 0).toFixed(1)
            let totalDebe = action.listCtacte.reduce((acc, curr) => { return acc + curr["debe"] }, 0).toFixed(1)
            let totalHaber = action.listCtacte.reduce((acc, curr) => { return acc + curr["haber"] }, 0).toFixed(1)

            let ctacte = action.listCtacte.map(mov => {
                saldomov = saldomov + mov['debe'] - mov['haber']
                return { ...mov, saldo: saldomov.toFixed(1) }})

            return {
                ...state,
                configForm: action.listCtacte[0],
                ctacte: [...ctacte,{concepto:"<<<<TOTALES>>>>", debe:totalDebe, haber:totalHaber, saldo:saldoTotal}],
                saldoTotal,
                totalDebe,
                totalHaber
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