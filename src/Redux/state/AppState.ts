import { IPersona } from "../../models";


// interface del initialState en el reducer de person
export interface IPersonInitialState{
    listPerson: [] | IPersona[]
    filterList: [] | IPersona[]
    selectListPerson: [] | IPersona[]
    personDetails: {} | IPersona
    allSelect : boolean,
    tableFilterinUse: boolean,
    filterTags: {}
}

//interface del conbine reducer en Store.ts

export interface AppState {
    PersonState:IPersonInitialState
}