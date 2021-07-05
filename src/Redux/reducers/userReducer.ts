import { Reducer } from 'redux';
import { UserActions, userActionTypes } from '../actions/users/userActionTypes'
import { IUserInitialState } from '../state/AppState';

const InitialState: IUserInitialState = {
    usuario:''
}

const usuarioReducer: Reducer<IUserInitialState, UserActions> = (state = InitialState, action: UserActions) => {

    switch (action.type) {
        case userActionTypes.LOGIN :{
           // console.log("REDUX ",action.usuario)
            return {
                ...state,
                usuario: action.usuario
            }
        }
        case userActionTypes.LOGOUT :{
            return {
                ...state,
                usuario:'',
            }
        }

        default: return state;
    }
}
export default usuarioReducer