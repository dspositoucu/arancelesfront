import { Dispatch } from 'redux';
import { CtacteApi } from '../../../api/rest/CtacteApi';
import {
    AddCtacteAction,
    GetCtacteListAction,
    GetCtacteDetailsAction,
    SelectCtacteAction,
    UpdateCtacteAction,
    ActionTypes
} from './CtacteActionTypes';

import { typesModels, ICuentas } from '../../../models';

export const addAsientoAction = (asiento: typesModels): AddCtacteAction => {
    return {
        type: ActionTypes.ADD_CTACTE,
        asiento
    }
}

const getCtacteList = (listCtacte: any[]): GetCtacteListAction => {
    return {
        type: ActionTypes.GET_ALL_CTACTE,
        listCtacte
    }
}

export const getCtacteDetails = (asientoDetails: typesModels): GetCtacteDetailsAction => {
    return {
        type: ActionTypes.GET_CTACTE_DETAIL,
        asientoDetails
    }
}

export const selectCtacte = (selectAsiento: typesModels): SelectCtacteAction => {
    return {
        type: ActionTypes.SELECT_CUENTA,
        selectAsiento
    }
}

export const updateCtacteAction = (idAsiento: number | string, newAsiento: typesModels): UpdateCtacteAction => {
    return {
        type: ActionTypes.UPDATE_CTACTE,
        idAsiento,
        newAsiento,
    }
}

export const getCtacte = (idCuentaPersona) => {
    return (dispatch: Dispatch) => {
        return new CtacteApi()
            .getCtacte(idCuentaPersona)
            .then(resp => dispatch(getCtacteList(resp.data)))
            .catch(err=> console.log("ERROR GET CUENTA CORRIENTE ",  err))
    }
}

