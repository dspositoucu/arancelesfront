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
    AddFilterAction,
    RemoveFilterTagAction,
} from "./ActionTypeInformes";
import { InformesApi } from "../../../api/rest/InformesApi";
import { Dispatch } from "redux";



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

const getAllData = (data: []): GetAllData => {
    return {
        type: ActionTypes.GET_ALL_DATA,
        data
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

export const alumnosConCBU = ():AlumnosConCBU => {
    return {
        type: ActionTypes.ALUMNOS_CON_CBU
    }
}

export const alumnosSinCBU = ():AlumnosSinCBU => {
    return {
        type: ActionTypes.ALUMNOS_SIN_CBU
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