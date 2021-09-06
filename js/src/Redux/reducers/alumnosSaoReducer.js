import { ActionTypes } from '../actions/AlumnosSao/AlumnosSaoActionCreator'
const InitialState = {
    alumnosSao: [],
    selectAlumno: {}
}
const alumnosSaoReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ActionTypes.GET_ALL_ALUMNOS_SAO: {
            return {
                ...state,
                alumnosSao: action.listAlumnosSao
            }
        }
        case ActionTypes.SELECT_ALUMNOS_SAO: {
            return {
                ...state,
                selectAlumno: action.selectAlumnosSao
            }
        }
        default: return state;
    }
}
export default alumnosSaoReducer