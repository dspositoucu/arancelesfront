
import { UsuarioApi } from '../../../api/UsuarioApi'
import { getStoredAuthToken, storeAuthToken} from '../../../utils/authToken'
import history from '../../../helpers/history'

export const ActionTypes = {
    LOGIN : "LOGIN",
    LOGOUT : "LOGOUT", 
  }

export const logout = () => {
    localStorage.clear()
    history.push('/')
    return {
        type: ActionTypes.LOGOUT,
    }
}

const loginAction = (usuario) => {

    return {
        type: ActionTypes.LOGIN,
        usuario
    }
}

export const loginUser = (usuario) => {
    return (dispatch) => {

        return new UsuarioApi()

            .login(usuario)
            .then(resp => {
                console.log("VINO EL TOKEEN ????  ",resp.data)
                storeAuthToken(resp.data?.access_token)
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

