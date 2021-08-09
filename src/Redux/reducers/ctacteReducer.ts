import { Reducer } from 'redux';
import { CtacteActions, ActionTypes } from '../actions/ctacte/CtacteActionTypes'
import { ICtacteInitialState } from '../state/AppState';

const InitialState: ICtacteInitialState = {
    ctacte:[]
}

const ctacteReducer: Reducer<ICtacteInitialState, CtacteActions> = (state = InitialState, action: CtacteActions) => {

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
export default ctacteReducer