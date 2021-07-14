import {
    ActionTypes,
    GetAllData,
    BecadosActivos,
    AlumnosActivos,
    AlumnosDadosDeBaja,
    AlumnosConCBU,
    AlumnosSinCBU,
    AlumnosConFinDeCarrera,
    AlumnosConAñoDeGracia,
    AlumnosAcreditanEnBanco,
    AlumnosSinCuenta,
    Unfiltered,
    AddFilterAction,
    RemoveFilterTagAction,
} from "./ActionTypeInformes";
import { InformesApi } from "../../../api/rest/InformesApi";
import { Dispatch } from "redux";

// models
import { IInformes } from "../../../models";

export const unfiltered = (): Unfiltered =>{
    return {
        type:ActionTypes.UNFILTERED
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

const getAllData = (data: IInformes[]): GetAllData => {
    return {
        type: ActionTypes.GET_ALL_DATA,
        data
    }
}

export const becadosActivos = (state:boolean):BecadosActivos =>{
    return {
        type: ActionTypes.ALUMNOS_BECADOS_ACTIVOS,
        state
    }
}

export const alumnosActivos = (state:boolean):AlumnosActivos =>{
    return {
        type: ActionTypes.ALUMNOS_ACTIVOS,
        state
    }
}

export const alumnosDadosDeBaja = (state:boolean):AlumnosDadosDeBaja =>{
    return {
        type: ActionTypes.ALUMNOS_DADOS_DE_BAJA,
        state
    }
}

export const alumnosConCBU = (state:boolean):AlumnosConCBU => {
    return {
        type: ActionTypes.ALUMNOS_CON_CBU,
        state
    }
}

export const alumnosSinCBU = (state:boolean):AlumnosSinCBU => {
    return {
        type: ActionTypes.ALUMNOS_SIN_CBU,
        state
    }
}

export const alumnosConFinDeCarrera = (state:boolean):AlumnosConFinDeCarrera => {
    return {
        type: ActionTypes.ALUMNOS_CON_FIN_DE_CARRERA,
        state
    }
}

export const alumnosConAñoDeGracia = (state:boolean):AlumnosConAñoDeGracia => {
    return {
        type: ActionTypes.ALUMNOS_CON_AÑO_DE_GRACIA,
        state
    }
}

export const alumnosAcreditanEnBanco = (state:boolean):AlumnosAcreditanEnBanco => {
    return {
        type: ActionTypes.ALUMNOS_ACREDITAN_EN_BANCO,
        state
    }
}

export const alumnosSinCuenta = (state:boolean):AlumnosSinCuenta => {
    return {
        type: ActionTypes.ALUMNOS_SIN_CUENTAS,
        state
    }
}

export const cargarListaInformesFalsas = (data) =>{
    return getAllData(data)
}

export const getAllDataInformes = () => {
    return (dispatch: Dispatch) => {
        return new InformesApi()
            .getAllDataInformes()
            .then(resp => {
                dispatch(getAllData(resp.data))
                console.log(resp.data)
            })
            .catch(err => console.log(err))
    }
}