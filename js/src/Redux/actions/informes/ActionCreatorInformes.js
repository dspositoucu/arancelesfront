
import { InformesApi } from "../../../api/InformesApi";

export const ActionTypes = {
    GET_ALL_DATA : "GET_ALL_DATA",
    ALUMNOS_BECADOS_ACTIVOS : "ALUMNOS_BECADOS_ACTIVOS",
    ALUMNOS_DADOS_DE_BAJA : "ALUMNOS_DADOS_DE_BAJA",
    ALUMNOS_ACTIVOS : "ALUMNOS_ACTIVOS",
    ALUMNOS_CON_CBU : "ALUMNOS_CON_CBU",
    ALUMNOS_SIN_CBU : "ALUMNOS_SIN_CBU",
    ALUMNOS_CON_AÑO_DE_GRACIA : "ALUMNOS_CON_AÑO_DE_GRACIA",
    ALUMNOS_CON_FIN_DE_CARRERA : "ALUMNOS_CON_FIN_DE_CARRERA",
    ALUMNOS_ACREDITAN_EN_BANCO : "ALUMNOS_ACREDITAN_EN_BANCO",
    ALUMNOS_SIN_CUENTAS : "ALUMNOS_SIN_CUENTAS",
    ADD_FILTER_TAG : "ADD_FILTER_TAG",
    UNFILTERED : "UNFILTERED",
    REMOVE_FILTER_TAG : "REMOVE_FILTER_TAG",
  }

export const unfiltered = () =>{
    return {
        type:ActionTypes.UNFILTERED
    }
}

export const removeFilterTag = (tag) => {
    return {
        type: ActionTypes.REMOVE_FILTER_TAG,
        tag
    }
}

export const addFilter = (filter)=> {
    return {
        type: ActionTypes.ADD_FILTER_TAG,
        filter
    }
}

const getAllData = (data) => {
    return {
        type: ActionTypes.GET_ALL_DATA,
        data
    }
}

export const becadosActivos = (state) =>{
    return {
        type: ActionTypes.ALUMNOS_BECADOS_ACTIVOS,
        state
    }
}

export const alumnosActivos = (state) =>{
    return {
        type: ActionTypes.ALUMNOS_ACTIVOS,
        state
    }
}

export const alumnosDadosDeBaja = (state) =>{
    return {
        type: ActionTypes.ALUMNOS_DADOS_DE_BAJA,
        state
    }
}

export const alumnosConCBU = (state) => {
    return {
        type: ActionTypes.ALUMNOS_CON_CBU,
        state
    }
}

export const alumnosSinCBU = (state) => {
    return {
        type: ActionTypes.ALUMNOS_SIN_CBU,
        state
    }
}

export const alumnosConFinDeCarrera = (state) => {
    return {
        type: ActionTypes.ALUMNOS_CON_FIN_DE_CARRERA,
        state
    }
}

export const alumnosConAñoDeGracia = (state) => {
    return {
        type: ActionTypes.ALUMNOS_CON_AÑO_DE_GRACIA,
        state
    }
}

export const alumnosAcreditanEnBanco = (state) => {
    return {
        type: ActionTypes.ALUMNOS_ACREDITAN_EN_BANCO,
        state
    }
}

export const alumnosSinCuenta = (state) => {
    return {
        type: ActionTypes.ALUMNOS_SIN_CUENTAS,
        state
    }
}

export const cargarListaInformesFalsas = (data) =>{
    return getAllData(data)
}

export const getAllDataInformes = () => {
    return (dispatch) => {
        return new InformesApi()
            .getAllDataInformes()
            .then(resp => {
                dispatch(getAllData(resp.data))
                console.log(resp.data)
            })
            .catch(err => console.log("ERROR GET ALL INFORMES: ",err))
    }
}
