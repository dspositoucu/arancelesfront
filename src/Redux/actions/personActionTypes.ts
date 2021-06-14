import { IPersona } from '../../models'

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
  person:IPersona
}

export interface GetPersonListAction {
  type: PersonActionTypes.GET_PERSON_LIST,
  listPerson:IPersona[]
}

export interface GetPersonDetailsAction {
  type: PersonActionTypes.GET_PERSON_DETAILS,
  personDetails: IPersona
}

export interface SelectPersonAction {
  type: PersonActionTypes.SELECT_PERSON,
  selectPerson: IPersona
}

export interface SelectAllPersonAction {
  type: PersonActionTypes.SELECT_ALL_PERSON,
}

export interface DeletePeronAction {
  type: PersonActionTypes.DELETE_PERSON,
  personId: number|string,
}

export interface UpdatePersonAction {
  type: PersonActionTypes.UPDATE_PERSON,
  personId: number|string, 
  person:IPersona,
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