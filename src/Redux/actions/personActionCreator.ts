import {
    AddPersonAction,
    GetPersonListAction,
    GetPersonDetailsAction,
    SelectPersonAction,
    SelectAllPersonAction,
    DeletePeronAction,
    UpdatePersonAction,
    PersonActionTypes
} from './personActionTypes';

import { IPersona } from '../../models';

export const addPersonAction = (person :IPersona) :AddPersonAction =>{
    return {
        type: PersonActionTypes.ADD_PERSON,
        person
    }
}

export const getPersonList = (listPerson :IPersona[]):GetPersonListAction => {
    return {
        type: PersonActionTypes.GET_PERSON_LIST,
        listPerson
    }
}

export const getPersonDetails = (personDetails :IPersona):GetPersonDetailsAction => {
    return {
        type: PersonActionTypes.GET_PERSON_DETAILS,
        personDetails
    }
}

export const selectPerson = (selectPerson :IPersona):SelectPersonAction => {
    return {
        type: PersonActionTypes.SELECT_PERSON,
        selectPerson
    }
}

export const selectAllPerson = ():SelectAllPersonAction => {
    return {
        type: PersonActionTypes.SELECT_ALL_PERSON,
    }
}

export const deletePerson = (personId: number|string):DeletePeronAction => {
    return {
        type: PersonActionTypes.DELETE_PERSON,
        personId,
    }
}

export const updatePerson = (personId: number|string, person:IPersona, index:number):UpdatePersonAction => {
    return {
        type: PersonActionTypes.UPDATE_PERSON,
        personId,
        person,
        index
    }
}