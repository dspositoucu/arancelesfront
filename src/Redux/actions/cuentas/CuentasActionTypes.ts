import { typesModels } from '../../../models'

export enum ActionTypes {

  ADD_CUENTAS = "ADD_CUENTAS",

  GET_ALL_CUENTAS = 'GET_ALL_CUENTAS',

  GET_CUENTAS_DETAIL = 'GET_CUENTAS_DETAIL',
  
  SELECT_CUENTA = 'SELECT_CUENTA',

  UPDATE_CUENTAS = 'UPDATE_CUENTAS',

}

export interface AddCuentasAction {
  type: ActionTypes.ADD_CUENTAS,
  cuenta:typesModels
}

export interface GetCuentasListAction {
  type: ActionTypes.GET_ALL_CUENTAS,
  listCuentas:typesModels[]
}

export interface GetCuentasDetailsAction {
  type: ActionTypes.GET_CUENTAS_DETAIL,
  cuentaDetails: typesModels
}

export interface SelectCuentaAction {
  type: ActionTypes.SELECT_CUENTA,
  selectCuenta: typesModels
}

export interface UpdateCuentasAction {
  type: ActionTypes.UPDATE_CUENTAS,
  idCuenta: number|string, 
  newCuenta:typesModels
}

export type CuentasActions =
AddCuentasAction  
  |GetCuentasListAction
  |GetCuentasDetailsAction
  |SelectCuentaAction
  |UpdateCuentasAction