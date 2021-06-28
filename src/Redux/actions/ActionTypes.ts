import { typesModels } from '../../models'

export enum ActionTypes {

  ADD_PERSON = "ADD_PERSON",
  ADD_FILTER_TAG = "ADD_FILTER_TAG",
  
  REMOVE_FILTER_TAG = "REMOVE_FILTER_TAG",

  GET_PERSON_LIST = 'GET_PERSON_LIST',
  GET_PERSON_DETAILS = 'GET_PERSON_DETAILS',
  
  SELECT_PERSON = 'SELECT_PERSON',
  SELECT_ALL_PERSON = "SELECT_ALL_PERSON",

  DELETE_PERSON = 'DELETE_PERSON',
  
  UPDATE_PERSON = 'UPDATE_PERSON',

  SET_FILTER_LIST = 'SET_FILTER_LIST' ,
  SET_TABLE_FILTER_IN_USE = "SET_TABLE_FILTER_IN_USE",

}

export interface RemoveFilterTagAction {
  type: ActionTypes.REMOVE_FILTER_TAG,
  tag: string
}
export interface AddFilterAction {
  type: ActionTypes.ADD_FILTER_TAG,
  filter: string
}

export interface SetFilterListAction {
  type: ActionTypes.SET_FILTER_LIST,
  filterList: typesModels[]
} 

export interface AddPersonAction {
  type: ActionTypes.ADD_PERSON,
  person:typesModels
}

export interface GetPersonListAction {
  type: ActionTypes.GET_PERSON_LIST,
  listPerson:typesModels[]
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
  personId: number|string, 
  person:typesModels,
  index:number
}

export interface SetTableFilterinUse {
  type :ActionTypes.SET_TABLE_FILTER_IN_USE,
  value: boolean
}

export type PersonActions =
AddPersonAction  
  |GetPersonListAction
  |GetPersonDetailsAction
  |SelectPersonAction
  |SelectAllPersonAction
  |DeletePeronAction
  |UpdatePersonAction
  |SetFilterListAction
  |SetTableFilterinUse
  |AddFilterAction
  |RemoveFilterTagAction