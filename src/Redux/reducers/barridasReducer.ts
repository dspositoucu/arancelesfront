import { Reducer } from 'redux';
import { BarridasActions, ActionTypes } from '../actions/barridas/BarridasActionTypes'
import { IBarridasInitialState } from '../state/AppState';
import { typesModels } from '../../models';

const InitialState: IBarridasInitialState = {
    listBarridas:[],
}

const barridasReducer: Reducer<IBarridasInitialState, BarridasActions> = (state = InitialState, action: BarridasActions) => {

    switch (action.type) {


        case ActionTypes.ADD_BARRIDAS: {
            let newArray = [action.barrida, ...state.listBarridas]
            return {
                ...state,
                listBarridas: [...newArray]
            }
        }

        case ActionTypes.GET_ALL_BARRIDAS: {
            return {
                ...state,
                listBarridas: action.listBarridas
            }
        }

        default: return state;
    }
}
export default barridasReducer