import { Action } from 'redux'
import { typesModels } from '../../../models'

export enum ActionTypes {

  ADD_PERSON = "ADD_PERSON",

  GET_PERSON_LIST = 'GET_PERSON_LIST',
  GET_PERSON_DETAILS = 'GET_PERSON_DETAILS',

  SELECT_PERSON = 'SELECT_PERSON',
  SELECT_ALL_PERSON = "SELECT_ALL_PERSON",

  DELETE_PERSON = 'DELETE_PERSON',

  UPDATE_PERSON = 'UPDATE_PERSON',

  CUENTAS_BY_PERSONA = "CUENTAS_BY_PERSONA"
}

export interface CuentasByPersona {
  type: ActionTypes.CUENTAS_BY_PERSONA,
  cuentasByPersona: any
}

export interface AddPersonAction {
  type: ActionTypes.ADD_PERSON,
  person: typesModels
}

export interface GetPersonListAction {
  type: ActionTypes.GET_PERSON_LIST,
  listPerson: typesModels[]
}

export interface GetPersonDetailsAction {
  type: ActionTypes.GET_PERSON_DETAILS,
  personDetails: typesModels
}

export interface SelectPersonAction {
  type: ActionTypes.SELECT_PERSON,
  selectPerson: typesModels
}

export interface SelectAllPersonAction {
  type: ActionTypes.SELECT_ALL_PERSON,
}

export interface DeletePeronAction {
  type: ActionTypes.DELETE_PERSON,
}

export interface UpdatePersonAction {
  type: ActionTypes.UPDATE_PERSON,
  idPersona: number | string,
  newPersona: typesModels,
  index: number
}

export type PersonActions =
  AddPersonAction
  | CuentasByPersona
  | GetPersonListAction
  | GetPersonDetailsAction
  | SelectPersonAction
  | SelectAllPersonAction
  | DeletePeronAction
  | UpdatePersonAction