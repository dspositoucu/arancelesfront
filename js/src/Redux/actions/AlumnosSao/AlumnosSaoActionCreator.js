import { AlumnosSao } from '../../../api/AlumnosSao';

export const ActionTypes = {
    ADD_ALUMNOS_SAO : "ADD_ALUMNOS_SAO",
    GET_ALL_ALUMNOS_SAO : 'GET_ALL_ALUMNOS_SAO',
    GET_ALUMNOS_SAO_DETAIL : 'GET_ALUMNOS_SAO_DETAIL',
    SELECT_ALUMNOS_SAO : 'SELECT_ALUMNOS_SAO',
    UPDATE_ALUMNOS_SAO : 'UPDATE_ALUMNOS_SAO',
  }

export const getNuevosAlumnosSaoList = (listAlumnosSao)=> {
    return {
        type: ActionTypes.GET_ALL_ALUMNOS_SAO,
        listAlumnosSao
    }
}

export const getAlumnoSaoDetails = (AlumnosSaoDetail)=> {
    return {
        type: ActionTypes.GET_ALUMNOS_SAO_DETAIL,
        AlumnosSaoDetail
    }
}

export const selectAlumno = (selectAlumnosSao)=> {
    return {
        type: ActionTypes.SELECT_ALUMNOS_SAO,
        selectAlumnosSao
    }
}



export const updateCuentas = (AlumnosSaoId, AlumnosSao, index) => {
    return {
        type: ActionTypes.UPDATE_ALUMNOS_SAO,
        AlumnosSaoId,
        AlumnosSao,
        index
    }
}
 

export const getAllNuevosAlunos = () => {
    return (dispatch) => {

        return new AlumnosSao()
            .getNuevosAlumnosSao()
            .then(resp => {
                dispatch(getNuevosAlumnosSaoList(resp.data))
            })
            .catch(err => console.log(err))
    }
}


