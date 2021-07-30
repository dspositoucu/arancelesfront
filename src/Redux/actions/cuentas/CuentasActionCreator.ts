import { Dispatch } from 'redux';
import { CuentasApi } from '../../../api/rest/CuentasApi';
import {
    AddCuentasAction,
    GetCuentasListAction,
    GetCuentasDetailsAction,
    SelectCuentasAction,
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

export const selectCuentas = (selectCuentas: typesModels): SelectCuentasAction => {
    return {
        type: ActionTypes.SELECT_CUENTAS,
        selectCuentas
    }
}



export const updateCuentas = (CuentasId: number | string, Cuentas: typesModels, index: number): UpdateCuentasAction => {
    return {
        type: ActionTypes.UPDATE_CUENTAS,
        CuentasId,
        Cuentas,
        index
    }
}

export const cargarListaCuentasFalsas = (cuentas) => {
    return getCuentasList(cuentas)
}

export const getAllCuentas = () => {
    return (dispatch: Dispatch) => {

        return new CuentasApi()
            .getAllCuentas()
            .then(resp => {
                dispatch(getCuentasList(resp.data))
            })
            .catch(err => console.log(err))
    }
}


export const addCuentas = (cuenta: ICuentas) => {
    return (dispatch: Dispatch) => {

        return new CuentasApi()
            .addCuentas(cuenta)
            .then(resp => {
                dispatch(addCuentaAction(resp.data))
            })
            .catch(err => console.log(err))

    }

}

export const getListCuentas = async () => {
   return new CuentasApi()
        .getListCuentas()
        .then(resp=> resp.data)
        .catch(err => console.log("ERROR getListCuentas ",err))
}