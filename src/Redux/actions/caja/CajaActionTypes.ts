import { typesModels } from '../../../models'

export enum ActionTypes {

  GET_ALL_MOVIMIENTOS_CAJA = 'GET_ALL_MOVIMIENTOS_CAJA',

  ADD_MOVIMIENTOS_CAJA = 'ADD_MOVIMIENTOS_CAJA',

  GET_MOVIMIENTOS_CAJA_DETAIL = 'GET_MOVIMIENTOS_CAJA_DETAIL',
  
  SELECT_MOVIMIENTOS_CAJA = 'SELECT_MOVIMIENTOS_CAJA',

  UPDATE_MOVIMIENTOS_CAJA = 'UPDATE_MOVIMIENTOS_CAJA',

}

export interface GetMovimientosCajaAction {
  type: ActionTypes.GET_ALL_MOVIMIENTOS_CAJA,
  listMovimientosCaja:typesModels[]
}

export interface AddMovimientosCajaAction {
  type: ActionTypes.ADD_MOVIMIENTOS_CAJA,
  movimiento:typesModels
}

export interface GetMovimientosCajaDetailsAction {
  type: ActionTypes.GET_MOVIMIENTOS_CAJA_DETAIL,
  MovimientosCajaDetails: typesModels
}

export interface SelectMovimientosCajaAction {
  type: ActionTypes.SELECT_MOVIMIENTOS_CAJA,
  selectMovimientosCaja: typesModels
}

export interface UpdateMovimientosCajaAction {
  type: ActionTypes.UPDATE_MOVIMIENTOS_CAJA,
  movimientosCajaId: number|string, 
  movimientosCaja:typesModels,
  index:number
}


export type MovimientosCajaActions =  
GetMovimientosCajaAction
  |AddMovimientosCajaAction
  |GetMovimientosCajaDetailsAction
  |SelectMovimientosCajaAction
  |UpdateMovimientosCajaAction