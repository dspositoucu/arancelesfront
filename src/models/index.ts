import React,{ FC } from 'react'

export interface RouteItem {
    key: String
    title: String
    tooltip?: String
    path?: String
    component?: FC<{}>
    enabled: boolean
    subRoutes?: Array<RouteItem>
    appendDivider?: boolean
}

export interface Persona {
    id:Number
    nombre:String
    n_doc:String
    telefono:String
    email:String
    domicilio:String
}

