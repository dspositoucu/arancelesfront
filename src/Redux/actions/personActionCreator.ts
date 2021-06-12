import {
    AddPersonAction,
    GetPersonListAction,
    GetPersonDetailsAction,
    SelectPersonAction,
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

export const SelectListPersonAction = (selectPerson :IPersona):SelectPersonAction => {
    return {
        type: PersonActionTypes.SELECT_PERSON,
        selectPerson
    }
}

export const deletePerson = (personId: number|string, index:number):DeletePeronAction => {
    return {
        type: PersonActionTypes.DELETE_PERSON,
        personId,
        index
    }
}

export const updatePerson = (personId: number|string, index: number, person:IPersona):UpdatePersonAction => {
    return {
        type: PersonActionTypes.UPDATE_PERSON,
        personId,
        index,
        person
    }
}