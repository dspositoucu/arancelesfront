import { Dispatch } from 'redux';
import { PersonaApi } from '../../../api/rest/PersonaApi';
import {
    AddPersonAction,
    GetPersonListAction,
    GetPersonDetailsAction,
    SelectPersonAction,
    SelectAllPersonAction,
    DeletePeronAction,
    UpdatePersonAction,
    CuentasByPersona,
    ActionTypes
} from './ActionTypes';

//otras acciones
import { setLoading } from '../globalActions/ActionCreatorGlobal';

import { IPersona, typesModels } from '../../../models';

const addPersonAction = (person: typesModels): AddPersonAction => {
    return {
        type: ActionTypes.ADD_PERSON,
        person
    }
}

export const getPersonList = (listPerson: typesModels[]): GetPersonListAction => {
    return {
        type: ActionTypes.GET_PERSON_LIST,
        listPerson
    }
}

export const getPersonDetails = (personDetails: typesModels): GetPersonDetailsAction => {
    return {
        type: ActionTypes.GET_PERSON_DETAILS,
        personDetails
    }
}

export const selectPerson = (selectPerson: typesModels): SelectPersonAction => {
    return {
        type: ActionTypes.SELECT_PERSON,
        selectPerson
    }
}

export const selectAllPerson = (): SelectAllPersonAction => {
    return {
        type: ActionTypes.SELECT_ALL_PERSON,
    }
}

export const deletePerson = (): DeletePeronAction => {
    return {
        type: ActionTypes.DELETE_PERSON,
    }
}

export const updatePerson = (idPersona: number | string, newPersona: typesModels, index: number): UpdatePersonAction => {
    return {
        type: ActionTypes.UPDATE_PERSON,
        idPersona,
        newPersona,
        index
    }
}

const getCuentasByIdPersonaAction = (cuentasByPersona:any):CuentasByPersona => {
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
    return (dispatch: Dispatch) => {
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

export const addPersona = (persona: IPersona) => {
    return (dispatch: Dispatch) => {
        return new PersonaApi()
            .addPersona(persona)
            .then(resp => dispatch(addPersonAction(resp.data)))
            .catch(err => console.log(err))
    }
}

export const getCuentasByPersona = (personaId,data:any) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading())
        return new PersonaApi()
            .getCuentasByPersonaId(personaId)
            .then(resp => {
                dispatch(setLoading());
                dispatch(getCuentasByIdPersonaAction(
                    {[personaId]:{cuentas:resp.data,...data}}
                )) 
                    console.log("QUE SERA ",{[personaId]:{cuentas:resp.data,...data}})
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