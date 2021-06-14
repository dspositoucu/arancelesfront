import { Reducer } from 'redux';
import { PersonActions, PersonActionTypes } from '../actions/personActionTypes'
import { IPersonInitialState } from '../state/AppState';

const InitialState: IPersonInitialState = {
    listPerson: [],
    selectListPerson: [],
    personDetails: {},
    allSelect:false
}

const personReducer: Reducer<IPersonInitialState, PersonActions> = (state = InitialState, action: PersonActions) => {

    switch (action.type) {

        case PersonActionTypes.ADD_PERSON: {
            return {
                ...state,
                listPerson: [action.person, ...state.listPerson]
            }
        }

        case PersonActionTypes.GET_PERSON_LIST: {
            return {
                ...state,
                listPerson: action.listPerson
            }
        }
        case PersonActionTypes.SELECT_PERSON: {

            // se verifica si el dato existe en el array selectList
            const existe = !!state.selectListPerson.filter(data => data.id === action.selectPerson.id)[0]
            console.log("EXISTE =", existe)
            return {
                ...state,
                // si existe se quita del listado, sino, se agrega
                selectListPerson: !existe
                    ? [...state.selectListPerson, action.selectPerson]
                    : state.selectListPerson.filter(data => data.id !== action.selectPerson.id),
                allSelect: state.selectListPerson.length > 0
            }
        }

        case PersonActionTypes.SELECT_ALL_PERSON: {
            const allDatos = state.selectListPerson.length > 0
            return {
                ...state,
                selectListPerson: !allDatos ? [...state.listPerson] : [],
                allSelect: !state.allSelect
            }
        }

        case PersonActionTypes.GET_PERSON_DETAILS: {
            return {
                ...state,
                personDetails: action.personDetails
            }
        }
        case PersonActionTypes.DELETE_PERSON: {
            return {
                ...state,
                listPerson: state.listPerson.filter(person => person.id !== action.personId)
            }
        }
        case PersonActionTypes.UPDATE_PERSON: {
            return {
                ...state,
                personDetails: state.listPerson.filter(person => person.id === action.personId)
            }
        }

        default: return state;
    }
}

export default personReducer