import { IInformes } from "../../../models"

export enum ActionTypes {
  GET_ALL_DATA = "GET_ALL_DATA",
  ALUMNOS_BECADOS_ACTIVOS = "ALUMNOS_BECADOS_ACTIVOS",
  ALUMNOS_DADOS_DE_BAJA = "ALUMNOS_DADOS_DE_BAJA",
  ALUMNOS_ACTIVOS = "ALUMNOS_ACTIVOS",
  ALUMNOS_CON_CBU = "ALUMNOS_CON_CBU",
  ALUMNOS_SIN_CBU = "ALUMNOS_SIN_CBU",
  ALUMNOS_CON_AÑO_DE_GRACIA = "ALUMNOS_CON_AÑO_DE_GRACIA",
  ALUMNOS_CON_FIN_DE_CARRERA = "ALUMNOS_CON_FIN_DE_CARRERA",
  ALUMNOS_ACREDITAN_EN_BANCO = "ALUMNOS_ACREDITAN_EN_BANCO",
  ALUMNOS_SIN_CUENTAS = "ALUMNOS_SIN_CUENTAS",

  ADD_FILTER_TAG = "ADD_FILTER_TAG",
  UNFILTERED = "UNFILTERED",
  REMOVE_FILTER_TAG = "REMOVE_FILTER_TAG",
}

export interface Unfiltered {
  type: ActionTypes.UNFILTERED
}
export interface RemoveFilterTagAction {
  type: ActionTypes.REMOVE_FILTER_TAG,
  tag: string
}
export interface AddFilterAction {
  type: ActionTypes.ADD_FILTER_TAG,
  filter: string
}

export interface GetAllData {
  type: ActionTypes.GET_ALL_DATA,
  data: IInformes[]
}
export interface BecadosActivos {
  type: ActionTypes.ALUMNOS_BECADOS_ACTIVOS
  state:boolean,
}

export interface AlumnosDadosDeBaja {
  type: ActionTypes.ALUMNOS_DADOS_DE_BAJA
  state:boolean
}

export interface AlumnosActivos {
  type: ActionTypes.ALUMNOS_ACTIVOS
  state:boolean
}

export interface AlumnosConCBU {
  type: ActionTypes.ALUMNOS_CON_CBU
  state:boolean
}

export interface AlumnosSinCBU {
  type: ActionTypes.ALUMNOS_SIN_CBU
  state:boolean
}

export interface AlumnosConAñoDeGracia {
  type: ActionTypes.ALUMNOS_CON_AÑO_DE_GRACIA
  state:boolean
}

export interface AlumnosConFinDeCarrera {
  type: ActionTypes.ALUMNOS_CON_FIN_DE_CARRERA
  state:boolean
}

export interface AlumnosAcreditanEnBanco {
  type: ActionTypes.ALUMNOS_ACREDITAN_EN_BANCO
  state:boolean
}

export interface AlumnosSinCuenta {
  type: ActionTypes.ALUMNOS_SIN_CUENTAS
  state:boolean
}

export type InformesAction =
  GetAllData
  | Unfiltered
  | BecadosActivos
  | AlumnosActivos
  | AlumnosDadosDeBaja
  | AlumnosConCBU
  | AlumnosSinCBU
  | AlumnosConFinDeCarrera
  | AlumnosConAñoDeGracia
  | AlumnosAcreditanEnBanco
  | AlumnosSinCuenta
  | RemoveFilterTagAction
  | AddFilterAction
