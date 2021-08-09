import { Reducer } from 'redux';
import { CtacteActions, ActionTypes } from '../actions/ctacte/CtacteActionTypes'
import { IModalTableState } from '../state/AppState';

const InitialState: IModalTableState = {
    dataTable:[]
}

const modalTableReducer: Reducer<IModalTableState, CtacteActions> = (state = InitialState, action: CtacteActions) => {

    switch (action.type) {
        case ActionTypes.GET_ALL_CTACTE :{
            return {
                ...state,
                ctacte: action.listCtacte
            }
        }

        default: return state;
    }
}
export default modalTableReducer