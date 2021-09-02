import { Dispatch } from 'redux';
import { CajaApi } from '../../../api/rest/CajaApi';
import {
GetMovimientosCajaAction,
    AddMovimientosCajaAction,
    GetMovimientosCajaDetailsAction,
    SelectMovimientosCajaAction,
    UpdateMovimientosCajaAction,
    ActionTypes
} from './CajaActionTypes';

import { typesModels, ICuentas } from '../../../models';


export const getMovimientosCajaAction = (listMovimientosCaja: typesModels[]): GetMovimientosCajaAction => {
    return {
        type: ActionTypes.GET_ALL_MOVIMIENTOS_CAJA,
        listMovimientosCaja
    }
}

export const addMovimientosCajaAction = (movimiento:typesModels) : AddMovimientosCajaAction => {
    return {
        type: ActionTypes.ADD_MOVIMIENTOS_CAJA,
        movimiento
    }
}

export const getMovimientosCajaDetailsAction = (MovimientosCajaDetails: typesModels): GetMovimientosCajaDetailsAction => {
    return {
        type: ActionTypes.GET_MOVIMIENTOS_CAJA_DETAIL,
        MovimientosCajaDetails
    }
}


export const updateMovimientosCajaAction = (movimientosCajaId: number | string, movimientosCaja: typesModels, index: number): UpdateMovimientosCajaAction => {
    return {
        type: ActionTypes.UPDATE_MOVIMIENTOS_CAJA,
        movimientosCajaId,
        movimientosCaja,
        index
    }
}


export const getAllMovimientos = () => {
    return (dispatch: Dispatch) => {

        return new CajaApi()
            .getAllMovimientos()
            .then(resp => {
                dispatch(getMovimientosCajaAction(resp.data))
            })
            .catch(err => console.log(err))
    }
}

export const getAllModosPagos = () => {
    return new CajaApi()
        .getModosPago()
        .then(resp=>resp.data)
        .catch(err=>console.log("ERROR CajaApi getAllModosPagos", err))
}

export const setDataReciboGeneral = (idCuentaPerosna) => {
    return new CajaApi()
        .setDataReciboGeneral(idCuentaPerosna)
        .then(resp=>resp.data)
        .catch(err=>console.log('ERROR CajaApi setDataReciboGeneral', err))
        

}

