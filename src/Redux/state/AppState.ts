import { IPersona } from "../../models";


// interface del initialState en el reducer de person
export interface IPersonInitialState{
    listPerson: [] | IPersona[]
    selectListPerson: [] | IPersona[]
    personDetails: {} | IPersona
}

//interface del conbine reducer en Store.ts

export interface AppState {
    PersonState:IPersonInitialState
}