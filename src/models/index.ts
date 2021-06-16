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
    id:number|string;
    nombre:string;
    n_doc:string;
    telefono:string;
    email:string;
    domicilio:string;
    sexo?:'string';
    fecha_nac?:Date;
    cuit?:string;
    sit_tributaria?:string
    
}

export type typesModels = IPersona 

