
import { ActionTypes } from '../actions/barridas/BarridasActionCreator'

const InitialState = {
    listBarridas:[],
}

const barridasReducer = (state = InitialState, action ) => {
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