import { userActionTypes, Logout, Login } from "./userActionTypes";

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