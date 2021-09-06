import { ActionTypes } from '../actions/ctacte/CtacteActionCreator'

const InitialState = {
    dataTable:[]
}

const modalTableReducer  = (state = InitialState, action) => {

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