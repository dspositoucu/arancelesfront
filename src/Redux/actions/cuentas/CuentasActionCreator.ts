import { Dispatch } from 'redux';
import { CuentasApi } from '../../../api/rest/CuentasApi';
import { ActividadesExtensionApi } from '../../../api/rest/ActividadesExtensionApi';
import {
    AddCuentasAction,
    GetCuentasListAction,
    GetCuentasDetailsAction,
    SelectCuentaAction,
    UpdateCuentasAction,
    ActionTypes
} from './CuentasActionTypes';

import { typesModels, ICuentas } from '../../../models';

const addCuentaAction = (cuenta: typesModels): AddCuentasAction => {
    return {
        type: ActionTypes.ADD_CUENTAS,
        cuenta
    }
}

export const getCuentasList = (listCuentas: typesModels[]): GetCuentasListAction => {
    return {
        type: ActionTypes.GET_ALL_CUENTAS,
        listCuentas
    }
}

export const getCuentasDetails = (cuentaDetails: typesModels): GetCuentasDetailsAction => {
    return {
        type: ActionTypes.GET_CUENTAS_DETAIL,
        cuentaDetails
    }
}

export const selectCuenta = (selectCuenta: typesModels): SelectCuentaAction => {
    return {
        type: ActionTypes.SELECT_CUENTA,
        selectCuenta
    }
}

export const updateCuentaAction = (idCuenta: number | string, newCuenta: typesModels): UpdateCuentasAction => {
    return {
        type: ActionTypes.UPDATE_CUENTAS,
        idCuenta,
        newCuenta,
    }
}

export const cargarListaCuentasFalsas = (cuentas) => {
    return getCuentasList(cuentas)
}

export const updateCuenta = (idCuenta, newCuenta) => {
    return (dispatch: Dispatch) => {
        return new CuentasApi()
            .updateCuenta(idCuenta, newCuenta)
            .then(resp => dispatch(updateCuentaAction(idCuenta, resp.data)))
            .catch(err => console.log("ERROR UPDATE CUENTA ", err))
    }
}

export const getAllCuentas = () => {
    return (dispatch: Dispatch) => {
        return new CuentasApi()
            .getAllCuentas()
            .then(resp => dispatch(getCuentasList(resp.data)))
            .catch(err => console.log(err))
    }
}

export const addCuentas = (cuenta: ICuentas) => {
    return (dispatch: Dispatch) => {
        return new CuentasApi()
            .addCuentas(cuenta)
            .then(resp => dispatch(addCuentaAction(resp.data)))
            .catch(err => console.log(err))
    }
}

export const getCuentasListSelect = () => {
    return new CuentasApi()
        .getCuentasList()
        .then(resp => resp.data)
        .catch(err => console.log(err))
}

export const getSedesListSelect = () => {
    return new CuentasApi()
        .getSedesList()
        .then(resp => resp.data)
        .catch(err => console.log(err))
}

export const getActividadesExtensionSelect = () => {
    return new ActividadesExtensionApi()
        .getActividadesExtension()
        .then(resp=>resp.data)
        .catch(err=>console.log(err))
}

export const getTiposCuenta = () => {
    return new CuentasApi() 
        .getTiposCuenta()
        .then(resp=>resp.data)
        .catch(err=>console.log("ERROR getTiposCuentas - CuentasApi ",err))
}