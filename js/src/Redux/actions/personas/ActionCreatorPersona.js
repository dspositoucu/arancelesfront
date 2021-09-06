
import { PersonaApi } from '../../../api/PersonaApi';
import { setLoading } from '../globalActions/ActionCreatorGlobal';
//otras acciones

export const ActionTypes = {
    ADD_PERSONA: "ADD_PERSONA",
    GET_PERSONA_LIST: 'GET_PERSONA_LIST',
    GET_PERSONA_DETAILS: 'GET_PERSONA_DETAILS',
    SELECT_PERSONA: 'SELECT_PERSONA',
    SELECT_ALL_PERSONA: "SELECT_ALL_PERSONA",
    DELETE_PERSONA: 'DELETE_PERSONA',
    UPDATE_PERSONA: 'UPDATE_PERSONA',
    CUENTAS_BY_PERSONA: "CUENTAS_BY_PERSONA"
}


const addPersonAction = (person) => {
    return {
        type: ActionTypes.ADD_PERSONA,
        person
    }
}
export const getPersonList = (listPerson) => {
    return {
        type: ActionTypes.GET_PERSONA_LIST,
        listPerson
    }
}

export const getPersonDetails = (personDetails) => {
    return {
        type: ActionTypes.GET_PERSONA_DETAILS,
        personDetails
    }
}

export const selectPerson = (selectPerson) => {
    return {
        type: ActionTypes.SELECT_PERSONA,
        selectPerson
    }
}

export const selectAllPerson = () => {
    return {
        type: ActionTypes.SELECT_ALL_PERSONA,
    }
}

export const deletePerson = () => {
    return {
        type: ActionTypes.DELETE_PERSONA,
    }
}

export const updatePerson = (idPersona, newPersona, index) => {
    return {
        type: ActionTypes.UPDATE_PERSONA,
        idPersona,
        newPersona,
        index
    }
}

const getCuentasByIdPersonaAction = (cuentasByPersona) => {
    return {
        type: ActionTypes.CUENTAS_BY_PERSONA,
        cuentasByPersona
    }
}

// cargar lista de personas falsas 
export const cargarListaPersonasFalsas = (persona) => {
    return getPersonList(persona)
}

export const getAllPersonas = () => {
    return (dispatch) => {
        dispatch(setLoading())
        return new PersonaApi()
            .getAllPersonas()
            .then(resp => {
                dispatch(getPersonList(resp.data))
                dispatch(setLoading())
            })
            .catch(err => console.log(err))
    }
}

export const addPersona = (persona) => {
    return (dispatch) => {
        return new PersonaApi()
            .addPersona(persona)
            .then(resp => dispatch(addPersonAction(resp.data)))
            .catch(err => console.log(err))
    }
}

export const getCuentasByPersona = (personaId, data) => {
    return (dispatch) => {
        dispatch(setLoading())
        return new PersonaApi()
            .getCuentasByPersonaId(personaId)
            .then(resp => {
                dispatch(setLoading());
                dispatch(getCuentasByIdPersonaAction(
                    { [personaId]: { cuentas: resp.data, ...data } }
                ))
            })
            .catch(err => console.log(err))
    }
}
export const getAllGeneros = () => {
    return new PersonaApi()
        .getAllGeneros()
        .then(resp => resp.data)
        .catch(err => console.log(err))
}