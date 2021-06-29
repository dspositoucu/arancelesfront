import { IPersona,IUser } from "../../models";


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

export interface IUserInitialState {
    usuario:IUser|''
}

export interface IModalInitialState {
    modalRegister?: boolean,
    modalError?:boolean,
    modalSuccess?:boolean,
    modalLoading?:boolean
}

//interface del conbine reducer en Store.ts
export interface AppState {
    PersonState:IPersonInitialState,
    UsuarioState:IUserInitialState,
    ModalState: IModalInitialState
}