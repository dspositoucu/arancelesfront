import { Reducer } from 'redux';
import { PersonActions, ActionTypes } from '../actions/personas/ActionTypes'
import { IPersonInitialState } from '../state/AppState';
import { typesModels, IPersona } from '../../models';

const InitialState: IPersonInitialState = {
    listPerson: [],
    selectListPerson: [],
    personDetails: {},
    allSelect: false,
}

const personReducer: Reducer<IPersonInitialState, PersonActions> = (state = InitialState, action: PersonActions) => {

    switch (action.type) {


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

            const compareAndDelete = (listA: IPersona[] |typesModels[], listB: IPersona[] | typesModels[], id = "id") => {
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
                //filterList: compareAndDelete(state.filterList, state.selectListPerson),
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