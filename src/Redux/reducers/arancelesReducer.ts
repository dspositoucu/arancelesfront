import { Reducer } from 'redux';
import { ArancelesActions, ActionTypes } from '../actions/aranceles/ArancelesActionTypes'
import { IArancelesInitialState } from '../state/AppState';
import { typesModels } from '../../models';

const InitialState: IArancelesInitialState = {
    listAranceles:[],
}

const arancelesReducer: Reducer<IArancelesInitialState, ArancelesActions> = (state = InitialState, action: ArancelesActions) => {

    switch (action.type) {
        case ActionTypes.ADD_ARANCELES: {
            let newArray = [action.cuenta, ...state.listAranceles]
            return {
                ...state,
                listCuentas: [...newArray]
            }
        }

        case ActionTypes.GET_ALL_ARANCELES: {
            return {
                ...state,
                listAranceles: action.listAranceles
            }
        }

        default: return state;
    }
}
export default arancelesReducer