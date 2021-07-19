import { typesModels } from '../../../models'

export enum ActionTypes {

  ADD_ARANCELES = "ADD_ARANCELES",

  GET_ALL_ARANCELES = 'GET_ALL_ARANCELES',

  GET_ARANCELES_DETAIL = 'GET_ARANCELES_DETAIL',
  
  SELECT_ARANCELES = 'SELECT_ARANCELES',

  UPDATE_ARANCELES = 'UPDATE_ARANCELES',

}

export interface AddArancelesAction {
  type: ActionTypes.ADD_ARANCELES,
  cuenta:typesModels
}

export interface GetArancelesListAction {
  type: ActionTypes.GET_ALL_ARANCELES,
  listAranceles:typesModels[]
}

export interface GetArancelesDetailsAction {
  type: ActionTypes.GET_ARANCELES_DETAIL,
  arancelesDetail: typesModels
}

export interface SelectArancelesAction {
  type: ActionTypes.SELECT_ARANCELES,
  selectAranceles: typesModels
}

export interface UpdateArancelesAction {
  type: ActionTypes.UPDATE_ARANCELES,
  ArancelesId: number|string, 
  Aranceles:typesModels,
  index:number
}

export type ArancelesActions =
AddArancelesAction  
  |GetArancelesListAction
  |GetArancelesDetailsAction
  |SelectArancelesAction
  |UpdateArancelesAction