import { ActionTypes } from '../actions/aranceles/ArancelesActionCreator'

const InitialState = {
    listAranceles:[],
}

const arancelesReducer = (state = InitialState, action ) => {

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