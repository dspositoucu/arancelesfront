import { Dispatch } from 'redux';
import { BarridasApi } from '../../../api/rest/BarridasApi';
import {
    GetBarridasListAction,
    GetBarridasDetailsAction,
    UpdateBarridasAction,
    AddBarridasAction,
    ActionTypes
} from './BarridasActionTypes';

import { typesModels, ICuentas } from '../../../models';


export const getBarridasListAction = (listBarridas: typesModels[]): GetBarridasListAction => {
    return {
        type: ActionTypes.GET_ALL_BARRIDAS,
        listBarridas
    }
}

export const addBarridasAction = (barrida: typesModels): AddBarridasAction => {
    return {
        type: ActionTypes.ADD_BARRIDAS,
        barrida
    }
}

export const getBarridasDetailsAction = (barridasDetails: typesModels): GetBarridasDetailsAction => {
    return {
        type: ActionTypes.GET_BARRIDAS_DETAIL,
        barridasDetails
    }
}


export const updateCuentas = (BarridasId: number | string, Barridas: typesModels, index: number): UpdateBarridasAction => {
    return {
        type: ActionTypes.UPDATE_BARRIDAS,
        BarridasId,
        Barridas,
        index
    }
}



export const cargarListaCuentasFalsas = (cuentas) => {
    return getBarridasListAction(cuentas)
}

export const getAllBarridas = () => {
    return (dispatch: Dispatch) => {

        return new BarridasApi()
            .getAllBarridas()
            .then(resp => {
                dispatch(getBarridasListAction(resp.data))
            })
            .catch(err => console.log(err))
    }
}


export const addBarrida = (cuenta: ICuentas) => {
    return (dispatch: Dispatch) => {
        const barridas = new BarridasApi()
        barridas
            .addBarridas(cuenta)
        barridas.getAllBarridas()
            .then(resp=>dispatch(getBarridasListAction(resp.data)))   
            .catch(err=>console.log("ERROR BARRIDAS ", err))
    }

}

export const getListaGruposBarrida = () => {
    return new BarridasApi()
        .getListaGruposBarrida()
        .then(resp => resp.data)
        .catch(err => console.log(err))
}