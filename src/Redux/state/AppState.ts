import { IPersona,IUser, IInformes, typesModels } from "../../models";

interface filterTags {
    Alumnos_dados_de_baja:boolean
    Alumnos_becados_activos:boolean
    Alumnos_activos:boolean
    Alumnos_acreditan_banco:boolean
    Alumnos_con_fin_de_carrera:boolean
    Alumnos_con_año_de_gracia:boolean
    Alumnos_sin_cuenta:boolean
}

// interface del initialState en el reducer de person
export interface IPersonInitialState{
    listPerson: [] | IPersona[] | any[]
    selectListPerson: [] | IPersona[] | any[]
    personDetails: {} | IPersona 
    allSelect : boolean,
}

export interface IUserInitialState {
    usuario:IUser|''
}

export interface IGlobalInitialState {
    tableData: typesModels[] | []
    tableFilterinUse: boolean,
    filterList: typesModels[] | []
    filterTags :{
        Alumnos_dados_de_baja:boolean
        Alumnos_becados_activos:boolean
        Alumnos_activos:boolean
        Alumnos_acreditan_banco:boolean
        Alumnos_con_fin_de_carrera:boolean
        Alumnos_con_año_de_gracia:boolean
        Alumnos_sin_cuenta:boolean
    },
}

export interface IInformesInitialState {
    AllDataInformes:IInformes[] | [] | any[],
    AllData: IInformes[] | [] | any[],
    filterTags :{
        Alumnos_dados_de_baja:boolean
        Alumnos_becados_activos:boolean
        Alumnos_activos:boolean
        Alumnos_acreditan_banco:boolean
        Alumnos_con_fin_de_carrera:boolean
        Alumnos_con_año_de_gracia:boolean
        Alumnos_sin_cuenta:boolean
    },
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
    GlobalState: IGlobalInitialState
}