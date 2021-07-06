import { FC } from 'react'

export interface IRouteItem {
    key: string
    title: string
    tooltip?: string
    path?: string
    component?: FC<{}>
    enabled: boolean
    subRoutes?: Array<IRouteItem>
    appendDivider?: boolean
}

export interface IPersona {
    id?: number | string;
    nombre: string;
    ndoc: string;
    telefono: string;
    email: string;
    domicilio: string;
    sexo?: string;
    fecnac?: Date | string;
    cuit?: string;
    tipodoc?: string;
    codigo?: string;
    idperaul?: string
    beneficio?: number;
    baja?: boolean
}

export interface IUser {
    username: string,
    access_token?: string
}


export interface IInformes {
    ACREDITABANCO: number
    ACTIVO: number
    ACTIVOHASTA: string | null
    BAJA: number
    CANTCUOTAS: number
    CANTEQUIVALENCIA: string | null
    CBU: string
    CODALU: string
    CODCAR: string
    CURSOACTUAL: string
    DESCRIPCION: string
    FIN: string | null
    FINDESDE: string | null
    FINHASTA: string | null
    IDBENEFICIO: number
    IDCUENTA: number | null
    IDPERSONA: number | null
    LIBREDEUDA: string | null
    LIBREDEUDACURSAR: string | null
    LIBREDEUDARENDIR: string | null
    MATERIASCURSAR: string | null
    MATERIASPERMITIDAS: string | null
    MATERIASRENDIR: string | null
    NOMBRE: string | null
    NOTA: number | null
    RECURSANTE: number | null
    SALDO: string | null
}

export type typesModels = IPersona & IInformes 

