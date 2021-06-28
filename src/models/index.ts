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
    id?:number|string;
    nombre: string;
    ndoc: string;
    telefono: string;
    email: string;
    domicilio: string;
    sexo?: string;
    fecnac?: Date|string;
    cuit?: string;
    tipodoc?:number;
    codigo?:string;
    idperaul?:string
    beneficio?: number;
    baja?: boolean
}

export interface IUser {
    username:string,
    access_token?:string
}

export type typesModels = IPersona 

