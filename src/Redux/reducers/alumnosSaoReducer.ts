import { Reducer } from 'redux';
import { AlumnosSaoActions, ActionTypes } from '../actions/AlumnosSao/AlumnosSaoActionTypes'
import { IAlumnosSaoState } from '../state/AppState';

const InitialState: IAlumnosSaoState = {
    alumnosSao:[],
}

const alumnosSaoReducer: Reducer<IAlumnosSaoState, AlumnosSaoActions> = (state = InitialState, action: AlumnosSaoActions) => {

    switch (action.type) {
        case ActionTypes.GET_ALL_ALUMNOS_SAO: {
            return {
                ...state,
                alumnosSao: action.listAlumnosSao 
            }
        }
        default: return state;
    }
}
export default alumnosSaoReducer