import { typesModels } from '../../models'

export enum PersonActionTypes {

  ADD_PERSON = "ADD_PERSON",

  GET_PERSON_LIST = 'GET_PERSON_LIST',
  GET_PERSON_DETAILS = 'GET_PERSON_DETAILS',
  
  SELECT_PERSON = 'SELECT_PERSON',
  SELECT_ALL_PERSON = "SELECT_ALL_PERSON",

  DELETE_PERSON = 'DELETE_PERSON',
  
  UPDATE_PERSON = 'UPDATE_PERSON',
  
}

export interface AddPersonAction {
  type: PersonActionTypes.ADD_PERSON,
  person:typesModels
}

export interface GetPersonListAction {
  type: PersonActionTypes.GET_PERSON_LIST,
  listPerson:typesModels[]
}

export interface GetPersonDetailsAction {
  type: PersonActionTypes.GET_PERSON_DETAILS,
  personDetails: typesModels
}

export interface SelectPersonAction {
  type: PersonActionTypes.SELECT_PERSON,
  selectPerson: typesModels
}

export interface SelectAllPersonAction {
  type: PersonActionTypes.SELECT_ALL_PERSON,
}

export interface DeletePeronAction {
  type: PersonActionTypes.DELETE_PERSON,
}

export interface UpdatePersonAction {
  type: PersonActionTypes.UPDATE_PERSON,
  personId: number|string, 
  person:typesModels,
  index:number
}

export type PersonActions =
AddPersonAction  
  |GetPersonListAction
  |GetPersonDetailsAction
  |SelectPersonAction
  |SelectAllPersonAction
  |DeletePeronAction
  |UpdatePersonAction