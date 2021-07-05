import { IPersona,IUser, IInformes, typesModels } from "../../models";

interface filterTags {
    tag:string,
    value: boolean
}

// interface del initialState en el reducer de person
export interface IPersonInitialState{
    listPerson: [] | IPersona[]
    filterList: [] | IPersona[]
    selectListPerson: [] | IPersona[]
    personDetails: {} | IPersona
    allSelect : boolean,
    tableFilterinUse: boolean,
}

export interface IUserInitialState {
    usuario:IUser|''
}

export interface IInformesInitialState {
    AllDataInformes:IInformes[],
    filterTags: {}
}

export interface IModalInitialState {
    modalRegister?: boolean,
    modalEdit?: boolean,
    modalError?:boolean,
    modalSuccess?:boolean,
    modalLoading?:boolean
}

//interface del conbine reducer en Store.ts
export interface AppState {
    PersonState:IPersonInitialState,
    UsuarioState:IUserInitialState,
    ModalState: IModalInitialState,
    InformesState: IInformesInitialState
}