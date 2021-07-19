import { typesModels } from '../../../models'

export enum ActionTypes {

  GET_ALL_BARRIDAS = 'GET_ALL_BARRIDAS',

  ADD_BARRIDAS = 'ADD_BARRIDAS',

  GET_BARRIDAS_DETAIL = 'GET_BARRIDAS_DETAIL',
  
  SELECT_BARRIDAS = 'SELECT_BARRIDAS',

  UPDATE_BARRIDAS = 'UPDATE_BARRIDAS',

}

export interface GetBarridasListAction {
  type: ActionTypes.GET_ALL_BARRIDAS,
  listBarridas:typesModels[]
}

export interface AddBarridasAction {
  type: ActionTypes.ADD_BARRIDAS,
  barrida:typesModels
}

export interface GetBarridasDetailsAction {
  type: ActionTypes.GET_BARRIDAS_DETAIL,
  barridasDetails: typesModels
}

export interface SelectBarridasAction {
  type: ActionTypes.SELECT_BARRIDAS,
  selectBarridas: typesModels
}

export interface UpdateBarridasAction {
  type: ActionTypes.UPDATE_BARRIDAS,
  BarridasId: number|string, 
  Barridas:typesModels,
  index:number
}


export type BarridasActions =  
  GetBarridasListAction
  |AddBarridasAction
  |GetBarridasDetailsAction
  |SelectBarridasAction
  |UpdateBarridasAction