
import { ActionTypes } from '../actions/personas/ActionCreatorPersona'

const InitialState = {
    listaPersonas: [],
    selectListPerson: [],
    personDetails: {},
    allSelect: false,
    cuentasByPersona: {}
}

const personReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ActionTypes.CUENTAS_BY_PERSONA: {
            const copy = { ...state.cuentasByPersona }
            return {
                ...state,
                cuentasByPersonas: { ...copy, ...action.cuentasByPersona }
            }
        }
        case ActionTypes.ADD_PERSONA: {
            let newArray = [action.person, ...state.listaPersonas]
            return {
                ...state,
                listaPersonas: [...newArray]
            }
        }

        case ActionTypes.GET_PERSONA_LIST: {
            return {
                ...state,
                listaPersonas: action.listPerson
            }
        }
        case ActionTypes.SELECT_PERSONA: {

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

        case ActionTypes.SELECT_ALL_PERSONA: {
            const allDatos = state.selectListPerson.length > 0
            return {
                ...state,
                selectListPerson: !allDatos ? [...state.listaPersonas] : [],
                allSelect: !state.allSelect
            }
        }

        case ActionTypes.GET_PERSONA_DETAILS: {
            return {
                ...state,
                personDetails: action.personDetails
            }
        }
        case ActionTypes.DELETE_PERSONA: {
            // comparar listas y eliminar similares
            // recive dos listas de objetos, eliminara los obj. de 
            // listA que sean iguales a los de ListB
            // NO SE MODIFICA LA LISTA ORIGINA 

            const compareAndDelete = (listA, listB, id = "id") => {
                let copyListA = [...listA]
                if (!listB.length) return copyListA

                listB.forEach(data => {
                    copyListA.forEach((data2, j) => {
                        data[id] === data2[id] && copyListA.splice(j, 1)
                    })
                })
                return copyListA
            }

            return {
                ...state,
                listPerson: compareAndDelete(state.listaPersonas, state.selectListPerson),
                //filterList: compareAndDelete(state.filterList, state.selectListPerson),
                selectListPerson: []
            }
        }
        case ActionTypes.UPDATE_PERSONA: {
            return {
                ...state,
                listPerson: state.listPerson.map(persona => {
                    if (persona.id === action.idPersona) persona = action.newPersona
                    return persona
                })
            }
        }

        default: return state;
    }
}
export default personReducer