import { IUser } from '../../models'

export enum userActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT", 
  }

  export interface LoginAction {
    type: userActionTypes.LOGIN,
    usuario:IUser
  }

  export interface Logout {
    type: userActionTypes.LOGOUT,
  }


  export type UserActions =   Logout 
                            | LoginAction
