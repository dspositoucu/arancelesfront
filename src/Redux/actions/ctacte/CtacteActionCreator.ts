import { Dispatch } from 'redux';
import { CtacteApi } from '../../../api/rest/CtacteApi';
import {
    AddCtacteAction,
    GetCtacteListAction,
    GetCtacteDetailsAction,
    SelectCtacteAction,
    UpdateCtacteAction,
    EditModeActionType,
    RevertirActionType,
    ActualizarActionType,
    ResetConfigActionType,
    ActionTypes
} from './CtacteActionTypes';

import { typesModels } from '../../../models';

export const revertirAction = (): RevertirActionType => {
    return {
        type: ActionTypes.REVERTIR,
    }
}

export const resetConfigAction = (): ResetConfigActionType =>{
    return {
        type: ActionTypes.RESET_CONFIG
    }
}

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

export const editModeAction = (idMov: number | string): EditModeActionType => {
    return {
        type: ActionTypes.EDIT_MODE,
        idMov
    }
}

export const actualizarAction = (newData:any): ActualizarActionType => {
    return{
        type: ActionTypes.ACTUALIZAR,
        newData
    }
}

export const getCtacte = (idCuentaPersona) => {
    return (dispatch: Dispatch) => {
        return new CtacteApi()
            .getCtacte(idCuentaPersona)
            .then(resp => dispatch(getCtacteList(resp.data)))
            .catch(err => console.log("ERROR GET CUENTA CORRIENTE ", err))
    }
}

