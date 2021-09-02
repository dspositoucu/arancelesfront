import { Dispatch } from 'redux';
import { userActionTypes, Logout, LoginAction } from "./userActionTypes";
import { UsuarioApi } from '../../../api/rest/UsuarioApi'
import { setDataLocalStorage } from '../../../helpers/LocalStorage';
import history from '../../../helpers/history'

//types
import { IUser } from "../../../models";

export const logout = (): Logout => {
    localStorage.clear()
    history.push('/')
    return {
        type: userActionTypes.LOGOUT,
    }
}

const loginAction = (usuario: IUser): LoginAction => {

    return {
        type: userActionTypes.LOGIN,
        usuario
    }
}

export const loginUser = (usuario: IUser) => {
    return (dispatch: Dispatch) => {

        return new UsuarioApi()

            .login(usuario)
            .then(resp => {
                setDataLocalStorage(resp.data, 'access_token')
                dispatch(loginAction(resp.data))
                history.push('/cuentas')
            })
            .catch(err => console.log(err))
    }
}

export const getAllUsuarios = () => {
    return new UsuarioApi()
        .getAllUsuarios()
        .then(resp=>resp.data)
        .catch(err=>console.log("ERROR getAllUsuario - UsuarioApi",err))
}

