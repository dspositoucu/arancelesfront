import { IPersona, IUser, IInformes, typesModels, ICuentas } from "../../models";

interface filterTags {
    Alumnos_dados_de_baja: boolean
    Alumnos_becados_activos: boolean
    Alumnos_activos: boolean
    Alumnos_acreditan_banco: boolean
    Alumnos_con_fin_de_carrera: boolean
    Alumnos_con_año_de_gracia: boolean
    Alumnos_sin_cuenta: boolean
}

// interface del initialState en el reducer de person
export interface IPersonInitialState {
    listPerson: [] | IPersona[] | any[]
    selectListPerson: [] | IPersona[] | any[]
    personDetails: {} | IPersona
    allSelect: boolean,
    cuentasByPersona: any | {}
}

export interface ICajaInitialState {
    movimientos: [] | any[]
}

export interface ICtacteInitialState {
    ctacte: [] | any[],
    totalDebe: string | number,
    totalHaber: string | number,
    saldoTotal: string | number,
    previous: any | {},
    configForm: {} | any

}

export interface IUserInitialState {
    usuario: IUser | ''
}

export interface IGlobalInitialState {
    tableData: typesModels[] | []
    detallesData: any | {}
    tableFilterinUse: boolean,
    filterList: typesModels[] | [],
    modalRegister: boolean,
    modalEdit: boolean,
    loading: boolean
}

export interface IInformesInitialState {
    AllDataInformes: IInformes[] | [] | any[],
    AllData: IInformes[] | [] | any[],
    filterTags: {
        Alumnos_dados_de_baja: boolean
        Alumnos_becados_activos: boolean
        Alumnos_activos: boolean
        Alumnos_acreditan_banco: boolean
        Alumnos_con_fin_de_carrera: boolean
        Alumnos_con_año_de_gracia: boolean
        Alumnos_sin_cuenta: boolean
    },
}

export interface IModalTableState {
    dataTable: any[]
}

export interface ICuentasInitialState {
    listCuentas: ICuentas[] | [] | any[],
    detallesCuenta: ICuentas | any
}

export interface IAlumnosSaoState {
    alumnosSao: [] | any[],
    selectAlumno:any | {}
}

export interface IArancelesInitialState {
    listAranceles: [] | any[]
}

export interface IBarridasInitialState {
    listBarridas: [] | any[]
}

export interface IModalInitialState {
    defaultModal?:boolean,
    modalRegister?: boolean,
    modalEdit?: boolean,
    modalError?: boolean,
    modalSuccess?: boolean,
    modalLoading?: boolean
}

//interface del conbine reducer en Store.ts
export interface AppState {
    CuentasState: ICuentasInitialState,
    PersonState: IPersonInitialState,
    UsuarioState: IUserInitialState,
    ModalState: IModalInitialState,
    InformesState: IInformesInitialState,
    GlobalState: IGlobalInitialState,
    ArancelesState: IArancelesInitialState,
    BarridasState: IBarridasInitialState,
    CajaState: ICajaInitialState,
    CtacteState: ICtacteInitialState,
    ModalTableState: IModalTableState,
    AlumnosSaoState:IAlumnosSaoState
}