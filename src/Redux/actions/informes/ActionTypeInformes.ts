export enum ActionTypes {
  GET_ALL_DATA = "GET_ALL_DATA",
  BECADOS_ACTIVOS = "BECADOS_ACTIVOS",
  ALUMNOS_DADOS_DE_BAJA = "ALUMNOS_DADOS_DE_BAJA",
  ALUMNOS_ACTIVOS = "ALUMNOS_ACTIVOS",
  ALUMNOS_CON_CBU = "ALUMNOS_CON_CBU",
  ALUMNOS_SIN_CBU = "ALUMNOS_SIN_CBU",
  ALUMNOS_CON_AÑO_DE_GRACIA = "ALUMNOS_CON_AÑO_DE_GRACIA",
  ALUMNOS_CON_FIN_DE_CARRERA = "ALUMNOS_CON_FIN_DE_CARRERA",
  ALUMNOS_ACREDITAN_EN_BANCO = "ALUMNOS_ACREDITAN_EN_BANCO",
  ALUMNOS_SIN_CUENTAS = "ALUMNOS_SIN_CUENTAS",

  ADD_FILTER_TAG = "ADD_FILTER_TAG",
  REMOVE_FILTER_TAG = "REMOVE_FILTER_TAG",
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
  data: []
}
export interface BecadosActivos {
  type: ActionTypes.BECADOS_ACTIVOS,
}

export interface AlumnosDadosDeBaja {
  type: ActionTypes.ALUMNOS_DADOS_DE_BAJA
}

export interface AlumnosActivos {
  type: ActionTypes.ALUMNOS_ACTIVOS
}

export interface AlumnosConCBU {
  type: ActionTypes.ALUMNOS_CON_CBU
}

export interface AlumnosSinCBU {
  type: ActionTypes.ALUMNOS_SIN_CBU
}

export interface AlumnosConAñoDeGracia {
  type: ActionTypes.ALUMNOS_CON_AÑO_DE_GRACIA
}

export interface AlumnosConFinDeCarrera {
  type: ActionTypes.ALUMNOS_CON_FIN_DE_CARRERA
}

export interface AlumnosAcreditanEnBanco {
  type: ActionTypes.ALUMNOS_ACREDITAN_EN_BANCO
}

export interface AlumnosSinCuenta {
  type: ActionTypes.ALUMNOS_SIN_CUENTAS
}

export type InformesAction =
  GetAllData
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
