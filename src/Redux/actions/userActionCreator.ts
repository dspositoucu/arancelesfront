import { Dispatch } from 'redux';
import { userActionTypes, Logout, Login } from "./userActionTypes";
import { UsuarioApi } from '../../api/rest/UsuarioApi'
import { setDataLocalStorage } from '../../helpers/LocalStorage';


//types
import { IUser } from "../../models"; 


export const logout = ():Logout => {
    return {
        type:userActionTypes.LOGOUT,
    }
}

export const login = ( usuario :IUser ) :Login => {
    return {
        type: userActionTypes.LOGIN,
        usuario
    }
}

export const loginUser = (usuario:IUser) => {
    return (dispatch :Dispatch)=>{
        return new UsuarioApi()
            .login(usuario)
            .then(resp=>{
                console.log(resp.data)
                setDataLocalStorage(resp.data,'access_token')
                dispatch(login(resp.data))
            })
            .catch(err=>console.log(err))
    }
} 