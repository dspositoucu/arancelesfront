//models
import { typesModels } from "../../../models"

export enum ActionTypes {
  SET_TABLE_FILTER_IN_USE = "SET_TABLE_FILTER_IN_USE",
  SET_FILTER_LIST = "SET_FILTER_LIST",
  SELECT_DATA = "SELECT_DATA",
  MODAL_FORM_REGISTER = "MODAL_FORM_REGISTER",
  MODAL_FORM_EDIT = "MODAL_FORM_EDIT",
  SET_LOADING = "SET_LOADING",
  FAIL_REQUEST = "FAIL_REQUEST",
  SUCCESS_REQUEST = "SUCCESS_REQUEST"

}
export interface GlobalSetTableInUse {
  type: ActionTypes.SET_TABLE_FILTER_IN_USE
  state: boolean
}

export interface GlobalSetFilterList {
  type: ActionTypes.SET_FILTER_LIST,
  filterList: typesModels[]
}

export interface SelectDataActionType {
  type: ActionTypes.SELECT_DATA
  selectData: any
}
export interface OpenModalRegister {
  type: ActionTypes.MODAL_FORM_REGISTER,
}
export interface OpenModalEdit {
  type: ActionTypes.MODAL_FORM_EDIT,
}

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING
}

export interface FailRequestActionType {
  type: ActionTypes.FAIL_REQUEST
  message: string
}

export interface SuccessRequestActionType {
  type: ActionTypes.SUCCESS_REQUEST
}

export type GlobalAction =
  GlobalSetTableInUse
  | FailRequestActionType
  | GlobalSetFilterList
  | SelectDataActionType
  | OpenModalRegister
  | OpenModalEdit
  | SetLoadingAction
  | SuccessRequestActionType