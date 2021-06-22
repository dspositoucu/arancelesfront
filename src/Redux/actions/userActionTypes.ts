import { IUser } from '../../models'

export enum userActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT", 
  }

  export interface Login {
    type: userActionTypes.LOGIN,
    usuario:IUser
  }

  export interface Logout {
    type: userActionTypes.LOGOUT,
  }


  export type UserActions =   Logout 
                            | Login
