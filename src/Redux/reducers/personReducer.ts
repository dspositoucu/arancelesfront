import { Reducer } from 'redux';
import { PersonActions, ActionTypes } from '../actions/ActionTypes'
import { IPersonInitialState } from '../state/AppState';
import { typesModels } from '../../models';

const InitialState: IPersonInitialState = {
    listPerson: [],
    selectListPerson: [],
    filterList: [],
    personDetails: {},
    filterTags: {},
    allSelect: false,
    tableFilterinUse: false,
}

const personReducer: Reducer<IPersonInitialState, PersonActions> = (state = InitialState, action: PersonActions) => {

    switch (action.type) {

        case ActionTypes.REMOVE_FILTER_TAG :{
            return {
                ...state,
                filterTags : {
                    ...state.filterTags,
                    [action.tag] : false
                }
            }
        }

        case ActionTypes.ADD_FILTER_TAG:{
            return {
                ...state,
                filterTags:{ ...state.filterTags,
                    [action.filter] : !state.filterTags[action.filter as keyof Object]
                } 
            }
        }

        case ActionTypes.ADD_PERSON: {
            let newArray = [action.person, ...state.listPerson]
            return {
                ...state,
                listPerson: [...newArray]
            }
        }

        case ActionTypes.GET_PERSON_LIST: {
            return {
                ...state,
                listPerson: action.listPerson
            }
        }
        case ActionTypes.SELECT_PERSON: {

            // se verifica si el dato existe en el array selectList
            const existe = !!state.selectListPerson.find(data => data.id === action.selectPerson.id)
            console.log("EXISTE =", existe)
            return {
                ...state,
                // si existe se quita del listado, sino, se agrega
                selectListPerson: !existe
                    ? [...state.selectListPerson, action.selectPerson]
                    : state.selectListPerson.filter(data => data.id !== action.selectPerson?.id),

                allSelect: state.selectListPerson.length > 0,
                personDetails: action.selectPerson
            }
        }

        case ActionTypes.SELECT_ALL_PERSON: {
            const allDatos = state.selectListPerson.length > 0
            return {
                ...state,
                selectListPerson: !allDatos ? [...state.listPerson] : [],
                allSelect: !state.allSelect
            }
        }

        case ActionTypes.SET_FILTER_LIST: {
            return {
                ...state,
                filterList: action.filterList
            }
        }

        case ActionTypes.SET_TABLE_FILTER_IN_USE: {
            return {
                ...state,
                tableFilterinUse: action.value,
            }
        }

        case ActionTypes.GET_PERSON_DETAILS: {
            return {
                ...state,
                personDetails: action.personDetails
            }
        }
        case ActionTypes.DELETE_PERSON: {
            // comparar listas y eliminar similares
            // recive dos listas de objetos, eliminara los obj. de 
            // listA que sean iguales a los de ListB
            // NO SE MODIFICA LA LISTA ORIGINA 

            const compareAndDelete = (listA: typesModels[], listB: typesModels[], id = "id") => {
                let copyListA = [...listA]
                if (!listB.length) return copyListA

                listB.forEach(data => {
                    copyListA.forEach((data2, j) => {
                        data[id as keyof Object] === data2[id as keyof Object] && copyListA.splice(j, 1)
                    })
                })
                return copyListA
            }

            return {
                ...state,
                listPerson: compareAndDelete(state.listPerson, state.selectListPerson),
                filterList: compareAndDelete(state.filterList, state.selectListPerson),
                selectListPerson: []

            }
        }
        case ActionTypes.UPDATE_PERSON: {
            return {
                ...state,
                personDetails: state.listPerson.filter(person => person.id === action.personId)
            }
        }

        default: return state;
    }
}
export default personReducer