import { ActionTypes } from '../actions/users/userActionCreator'
const InitialState = {
    usuario: ''
}
const usuarioReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ActionTypes.LOGIN: {
            // console.log("REDUX ",action.usuario)
            return {
                ...state,
                usuario: action.usuario
            }
        }
        case ActionTypes.LOGOUT: {
            return {
                ...state,
                usuario: '',
            }
        }
        default: return state;
    }
}
export default usuarioReducer