import { typesModels } from '../../../models'

export enum ActionTypes {

  ADD_CTACTE = "ADD_CTACTE",

  GET_ALL_CTACTE = 'GET_ALL_CTACTE',

  GET_CTACTE_DETAIL = 'GET_CTACTE_DETAIL',

  SELECT_CUENTA = 'SELECT_CUENTA',

  UPDATE_CTACTE = 'UPDATE_CTACTE',

  EDIT_MODE = "EDIT_MODE",

  REVERTIR = "REVERTIR",

  ACTUALIZAR = "ACTUALIZAR",

  RESET_CONFIG = "RESET_CONFIG"

}

export interface ResetConfigActionType {
  type: ActionTypes.RESET_CONFIG
}

export interface ActualizarActionType {
  type: ActionTypes.ACTUALIZAR
  newData: any,
}

export interface RevertirActionType {
  type: ActionTypes.REVERTIR
}
export interface EditModeActionType {
  type: ActionTypes.EDIT_MODE,
  idMov: number | string
}
export interface AddCtacteAction {
  type: ActionTypes.ADD_CTACTE,
  asiento: typesModels
}

export interface GetCtacteListAction {
  type: ActionTypes.GET_ALL_CTACTE,
  listCtacte: typesModels[]
}

export interface GetCtacteDetailsAction {
  type: ActionTypes.GET_CTACTE_DETAIL,
  asientoDetails: typesModels
}

export interface SelectCtacteAction {
  type: ActionTypes.SELECT_CUENTA,
  selectAsiento: typesModels
}

export interface UpdateCtacteAction {
  type: ActionTypes.UPDATE_CTACTE,
  idAsiento: number | string,
  newAsiento: typesModels
}

export type CtacteActions =
  AddCtacteAction
  | ResetConfigActionType
  | ActualizarActionType
  | GetCtacteListAction
  | GetCtacteDetailsAction
  | EditModeActionType
  | SelectCtacteAction
  | UpdateCtacteAction
  | RevertirActionType