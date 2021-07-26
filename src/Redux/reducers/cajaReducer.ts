import { Reducer } from 'redux';
import { MovimientosCajaActions, ActionTypes } from '../actions/caja/CajaActionTypes'
import { ICajaInitialState } from '../state/AppState';
import { typesModels } from '../../models';

const InitialState: ICajaInitialState = {
    movimientos: [],
}

const cajaReducer: Reducer<ICajaInitialState, MovimientosCajaActions> = (state = InitialState, action: MovimientosCajaActions) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_MOVIMIENTOS_CAJA: {
            return {
                ...state,
                movimientos: action.listMovimientosCaja
            }
        }

        default: return state;
    }
}
export default cajaReducer