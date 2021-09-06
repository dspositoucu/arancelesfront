
import { ActionTypes } from '../actions/caja/CajasActionCreator'

const InitialState = {
    movimientos: [],
}

const cajaReducer = (state = InitialState, action ) => {
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