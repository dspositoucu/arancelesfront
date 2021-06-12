import { Reducer } from 'redux';
import { PersonActions, PersonActionTypes } from '../actions/personActionTypes'
import { IPersonInitialState } from '../state/AppState';

const InitialState :IPersonInitialState = {
    listPerson:[],
    selectListPerson:[],
    personDetails:{}
}

const personReducer :Reducer<IPersonInitialState, PersonActions> = (state = InitialState, action:PersonActions) =>{
    
    switch(action.type){

        case PersonActionTypes.ADD_PERSON :{
            return {
                ...state,
                listPerson: [action.person, ...state.listPerson]
            }
        }

        case PersonActionTypes.GET_PERSON_LIST : {
            return {
                ...state,
                listPerson:action.listPerson
            }
        }
        case PersonActionTypes.SELECT_PERSON : {
            return {
                ...state,
                selectListPerson: [...state.selectListPerson, action.selectPerson]
            }
        }
        case PersonActionTypes.GET_PERSON_DETAILS : {
            return {
                ...state,
                personDetails: action.personDetails
            }
        }
        case PersonActionTypes.DELETE_PERSON : {
            return {
                ...state,
                listPerson: state.listPerson.slice(action.index, 1)
            }
        }
        case PersonActionTypes.UPDATE_PERSON : {
            return {
                ...state,
                listPerson: state.listPerson.splice(action.index,1,action.person)
            }
        }

     default: return state;
    }
}

export default personReducer