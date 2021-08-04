//models
import { typesModels } from "../../../models"

export enum ActionTypes{
    SET_TABLE_FILTER_IN_USE = "SET_TABLE_FILTER_IN_USE",
    SET_FILTER_LIST = "SET_FILTER_LIST",
    REMOVE_FILTER_TAG = "REMOVE_FILTER_TAG",
    ADD_FILTER_TAG = "ADD_FILTER_TAG",
    BECADOS_ACTIVOS = "BECADOS_ACTIVOS",
    ALUMNOS_DADOS_DE_BAJA = "ALUMNOS_DADOS_DE_BAJA",
    ALUMNOS_ACTIVOS = "ALUMNOS_ACTIVOS",
    ALUMNOS_CON_AÑO_DE_GRACIA = "ALUMNOS_CON_AÑO_DE_GRACIA",
    ALUMNOS_CON_FIN_DE_CARRERA = "ALUMNOS_CON_FIN_DE_CARRERA",
    ALUMNOS_ACREDITAN_EN_BANCO = "ALUMNOS_ACREDITAN_EN_BANCO",
    ALUMNOS_SIN_CUENTAS = "ALUMNOS_SIN_CUENTAS",
    SELECT_DATA = "SELECT_DATA",
    MODAL_FORM_REGISTER = "MODAL_FORM_REGISTER",
    MODAL_FORM_EDIT = "MODAL_FORM_EDIT",
    
}

export interface RemoveFilterTagAction {
  type: ActionTypes.REMOVE_FILTER_TAG,
  tag: string
}
export interface AddFilterAction {
  type: ActionTypes.ADD_FILTER_TAG,
  filter: string
}

export interface GlobalSetTableInUse {
    type: ActionTypes.SET_TABLE_FILTER_IN_USE
    state:boolean
}

export interface GlobalSetFilterList {
    type: ActionTypes.SET_FILTER_LIST,
    filterList: typesModels[]
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

  export interface SelectDataActionType {
    type: ActionTypes.SELECT_DATA
    selectData:any
  }
  export interface OpenModalRegister {
    type: ActionTypes.MODAL_FORM_REGISTER,
  }
  export interface OpenModalEdit {
    type: ActionTypes.MODAL_FORM_EDIT,
  }

export type GlobalAction = 
      GlobalSetTableInUse
    | GlobalSetFilterList
    | RemoveFilterTagAction
    | AddFilterAction
    | BecadosActivos
    | AlumnosActivos
    | AlumnosDadosDeBaja
    | AlumnosConFinDeCarrera
    | AlumnosConAñoDeGracia
    | AlumnosAcreditanEnBanco
    | AlumnosSinCuenta
    | SelectDataActionType
    | OpenModalRegister
    | OpenModalEdit