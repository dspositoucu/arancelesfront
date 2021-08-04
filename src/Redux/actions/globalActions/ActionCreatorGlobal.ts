import {
    ActionTypes, 
    GlobalSetTableInUse, 
    GlobalSetFilterList, 
    AddFilterAction,
    RemoveFilterTagAction,
    BecadosActivos,
    AlumnosActivos,
    AlumnosDadosDeBaja,
    AlumnosConFinDeCarrera,
    AlumnosConAñoDeGracia,
    AlumnosAcreditanEnBanco,
    AlumnosSinCuenta,
    SelectDataActionType,
    OpenModalRegister,
    OpenModalEdit
} from "./ActionTypeGlobal";
import { typesModels } from "../../../models";


export const globalSetTableFilterinUse = (state: boolean): GlobalSetTableInUse => {
    return {
        type: ActionTypes.SET_TABLE_FILTER_IN_USE,
        state
    }
}

export const globalSetFilterList = (filterList: typesModels[]): GlobalSetFilterList => {
    return {
        type: ActionTypes.SET_FILTER_LIST,
        filterList
    }
}

export const removeFilterTag = (tag: string): RemoveFilterTagAction => {
    return {
        type: ActionTypes.REMOVE_FILTER_TAG,
        tag
    }
}

export const addFilter = (filter: string): AddFilterAction => {
    return {
        type: ActionTypes.ADD_FILTER_TAG,
        filter
    }
}

export const becadosActivos = ():BecadosActivos =>{
    return {
        type: ActionTypes.BECADOS_ACTIVOS
    }
}

export const alumnosActivos = ():AlumnosActivos =>{
    return {
        type: ActionTypes.ALUMNOS_ACTIVOS
    }
}

export const alumnosDadosDeBaja = ():AlumnosDadosDeBaja =>{
    return {
        type: ActionTypes.ALUMNOS_DADOS_DE_BAJA
    }
}

export const alumnosConFinDeCarrera = ():AlumnosConFinDeCarrera => {
    return {
        type: ActionTypes.ALUMNOS_CON_FIN_DE_CARRERA
    }
}

export const alumnosConAñoDeGracia = ():AlumnosConAñoDeGracia => {
    return {
        type: ActionTypes.ALUMNOS_CON_AÑO_DE_GRACIA
    }
}

export const alumnosAcreditanEnBanco = ():AlumnosAcreditanEnBanco => {
    return {
        type: ActionTypes.ALUMNOS_ACREDITAN_EN_BANCO
    }
}

export const alumnosSinCuenta = ():AlumnosSinCuenta => {
    return {
        type: ActionTypes.ALUMNOS_SIN_CUENTAS
    }
}

export const selectDataAction = (selectData:any) :SelectDataActionType => {
    return {
        type: ActionTypes.SELECT_DATA,
        selectData
    }
}

export const openModalRegister = () :OpenModalRegister => {
    return {
        type: ActionTypes.MODAL_FORM_REGISTER,
    }
}

export const openModalEdit = () :OpenModalEdit => {
    return {
        type: ActionTypes.MODAL_FORM_EDIT,
    }
}