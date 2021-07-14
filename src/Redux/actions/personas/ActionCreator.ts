import { Dispatch } from 'redux';
import { PersonApi } from '../../../api/rest/PersonaApi';
import {
    AddPersonAction,
    GetPersonListAction,
    GetPersonDetailsAction,
    SelectPersonAction,
    SelectAllPersonAction,
    DeletePeronAction,
    UpdatePersonAction,
    ActionTypes
} from './ActionTypes';

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


export const updatePerson = (personId: number | string, person: typesModels, index: number): UpdatePersonAction => {
    return {
        type: ActionTypes.UPDATE_PERSON,
        personId,
        person,
        index
    }
}
 

// cargar lista de personas falsas 
export const cargarListaPersonasFalsas = (persona) =>{
 return getPersonList(persona)
}


export const getAllPersonas = () => {
    return (dispatch: Dispatch) => {

        return new PersonApi()
            .getAllPersonas()
            .then(resp => {
                dispatch(getPersonList(resp.data))
            })
            .catch(err => console.log(err))
    }
}


export const addPersona = (persona: IPersona) => {
    return (dispatch: Dispatch) => {

        return new PersonApi()
            .addPersona(persona)
            .then(resp => {
                dispatch(addPersonAction(resp.data))
            })
            .catch(err => console.log(err))

    }

}