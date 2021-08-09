import { typesModels } from '../../../models'

export enum ActionTypes {

  ADD_CTACTE = "ADD_CTACTE",

  GET_ALL_CTACTE = 'GET_ALL_CTACTE',

  GET_CTACTE_DETAIL = 'GET_CTACTE_DETAIL',
  
  SELECT_CUENTA = 'SELECT_CUENTA',

  UPDATE_CTACTE = 'UPDATE_CTACTE',

}

export interface AddCtacteAction {
  type: ActionTypes.ADD_CTACTE,
  asiento:typesModels
}

export interface GetCtacteListAction {
  type: ActionTypes.GET_ALL_CTACTE,
  listCtacte:typesModels[]
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
  idAsiento: number|string, 
  newAsiento:typesModels
}

export type CtacteActions =
AddCtacteAction  
  |GetCtacteListAction
  |GetCtacteDetailsAction
  |SelectCtacteAction
  |UpdateCtacteAction