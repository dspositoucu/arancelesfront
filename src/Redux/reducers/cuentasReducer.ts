import { Reducer } from 'redux';
import { CuentasActions, ActionTypes } from '../actions/cuentas/CuentasActionTypes'
import { ICuentasInitialState } from '../state/AppState';
import { typesModels } from '../../models';

const InitialState: ICuentasInitialState = {
    listCuentas:[],
}

const cuentasReducer: Reducer<ICuentasInitialState, CuentasActions> = (state = InitialState, action: CuentasActions) => {

    switch (action.type) {


        case ActionTypes.ADD_CUENTAS: {
            let newArray = [action.cuenta, ...state.listCuentas]
            return {
                ...state,
                listCuentas: [...newArray]
            }
        }

        case ActionTypes.GET_ALL_CUENTAS: {
            return {
                ...state,
                listCuentas: action.listCuentas
            }
        }

        default: return state;
    }
}
export default cuentasReducer