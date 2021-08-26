import { Dispatch } from 'redux';
import { AlumnosSao } from '../../../api/rest/AlumnosSao';
import {
AddAlumnosSaoAction,
    GetAlumnosSaoListAction,
    GetAlumnosSaoDetailsAction,
    SelectAlumnosSaoAction,
    UpdateAlumnosSaoAction,
    ActionTypes
} from './AlumnosSaoActionTypes';

import { typesModels, ICuentas } from '../../../models';


export const getNuevosAlumnosSaoList = (listAlumnosSao: typesModels[]): GetAlumnosSaoListAction => {
    return {
        type: ActionTypes.GET_ALL_ALUMNOS_SAO,
        listAlumnosSao
    }
}

export const getAlumnoSaoDetails = (AlumnosSaoDetail: typesModels): GetAlumnosSaoDetailsAction => {
    return {
        type: ActionTypes.GET_ALUMNOS_SAO_DETAIL,
        AlumnosSaoDetail
    }
}

export const selectAlumno = (selectAlumnosSao: typesModels): SelectAlumnosSaoAction => {
    return {
        type: ActionTypes.SELECT_ALUMNOS_SAO,
        selectAlumnosSao
    }
}



export const updateCuentas = (AlumnosSaoId: number | string, AlumnosSao: typesModels, index: number): UpdateAlumnosSaoAction => {
    return {
        type: ActionTypes.UPDATE_ALUMNOS_SAO,
        AlumnosSaoId,
        AlumnosSao,
        index
    }
}
 

export const getAllNuevosAlunos = () => {
    return (dispatch: Dispatch) => {

        return new AlumnosSao()
            .getNuevosAlumnosSao()
            .then(resp => {
                dispatch(getNuevosAlumnosSaoList(resp.data))
            })
            .catch(err => console.log(err))
    }
}

