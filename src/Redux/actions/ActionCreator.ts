import {
    AddPersonAction,
    GetPersonListAction,
    GetPersonDetailsAction,
    SelectPersonAction,
    SelectAllPersonAction,
    DeletePeronAction,
    UpdatePersonAction,
    SetFilterListAction,
    SetTableFilterinUse,
    AddFilterAction,
    RemoveFilterTagAction,
    ActionTypes
} from './ActionTypes';

import { typesModels } from '../../models';


export const removeFilterTag = (tag :string) :RemoveFilterTagAction =>{
    return {
        type: ActionTypes.REMOVE_FILTER_TAG,
        tag
    }
}

export const addFilter = ( filter :string ) :AddFilterAction =>{
    return {
        type: ActionTypes.ADD_FILTER_TAG,
        filter
    }
}

export const setFilterList = ( filterList :typesModels[] ):SetFilterListAction => {
    return{
        type: ActionTypes.SET_FILTER_LIST,
        filterList
    }
}

export const addPerson = (person :typesModels) :AddPersonAction =>{
    return {
        type: ActionTypes.ADD_PERSON,
        person
    }
}

export const getPersonList = (listPerson :typesModels[]):GetPersonListAction => {
    return {
        type: ActionTypes.GET_PERSON_LIST,
        listPerson
    }
}

export const getPersonDetails = (personDetails :typesModels):GetPersonDetailsAction => {
    return {
        type: ActionTypes.GET_PERSON_DETAILS,
        personDetails
    }
}

export const selectPerson = (selectPerson :typesModels):SelectPersonAction => {
    return {
        type: ActionTypes.SELECT_PERSON,
        selectPerson
    }
}

export const selectAllPerson = ():SelectAllPersonAction => {
    return {
        type: ActionTypes.SELECT_ALL_PERSON,
    }
}

export const deletePerson = ():DeletePeronAction => {
    return {
        type: ActionTypes.DELETE_PERSON,
    }
}

export const setTableFilterinUse = (value: boolean):SetTableFilterinUse => {
    return {
        type: ActionTypes.SET_TABLE_FILTER_IN_USE,
        value
    }
}

export const updatePerson = (personId: number|string, person:typesModels, index:number):UpdatePersonAction => {
    return {
        type: ActionTypes.UPDATE_PERSON,
        personId,
        person,
        index
    }
}