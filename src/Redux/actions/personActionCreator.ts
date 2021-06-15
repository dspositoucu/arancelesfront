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

import { typesModels } from '../../models';

export const addPerson = (person :typesModels) :AddPersonAction =>{
    return {
        type: PersonActionTypes.ADD_PERSON,
        person
    }
}

export const getPersonList = (listPerson :typesModels[]):GetPersonListAction => {
    return {
        type: PersonActionTypes.GET_PERSON_LIST,
        listPerson
    }
}

export const getPersonDetails = (personDetails :typesModels):GetPersonDetailsAction => {
    return {
        type: PersonActionTypes.GET_PERSON_DETAILS,
        personDetails
    }
}

export const selectPerson = (selectPerson :typesModels):SelectPersonAction => {
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

export const deletePerson = ():DeletePeronAction => {
    return {
        type: PersonActionTypes.DELETE_PERSON,
    }
}

export const updatePerson = (personId: number|string, person:typesModels, index:number):UpdatePersonAction => {
    return {
        type: PersonActionTypes.UPDATE_PERSON,
        personId,
        person,
        index
    }
}