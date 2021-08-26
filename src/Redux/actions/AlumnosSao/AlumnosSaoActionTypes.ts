import { typesModels } from '../../../models'

export enum ActionTypes {

  ADD_ALUMNOS_SAO = "ADD_ALUMNOS_SAO",

  GET_ALL_ALUMNOS_SAO = 'GET_ALL_ALUMNOS_SAO',

  GET_ALUMNOS_SAO_DETAIL = 'GET_ALUMNOS_SAO_DETAIL',
  
  SELECT_ALUMNOS_SAO = 'SELECT_ALUMNOS_SAO',

  UPDATE_ALUMNOS_SAO = 'UPDATE_ALUMNOS_SAO',

}

export interface AddAlumnosSaoAction {
  type: ActionTypes.ADD_ALUMNOS_SAO,
  alumno:typesModels
}

export interface GetAlumnosSaoListAction {
  type: ActionTypes.GET_ALL_ALUMNOS_SAO,
  listAlumnosSao:typesModels[]
}

export interface GetAlumnosSaoDetailsAction {
  type: ActionTypes.GET_ALUMNOS_SAO_DETAIL,
  AlumnosSaoDetail: typesModels
}

export interface SelectAlumnosSaoAction {
  type: ActionTypes.SELECT_ALUMNOS_SAO,
  selectAlumnosSao: typesModels
}

export interface UpdateAlumnosSaoAction {
  type: ActionTypes.UPDATE_ALUMNOS_SAO,
  AlumnosSaoId: number|string, 
  AlumnosSao:typesModels,
  index:number
}

export type AlumnosSaoActions =
AddAlumnosSaoAction  
  |GetAlumnosSaoListAction
  |GetAlumnosSaoDetailsAction
  |SelectAlumnosSaoAction
  |UpdateAlumnosSaoAction