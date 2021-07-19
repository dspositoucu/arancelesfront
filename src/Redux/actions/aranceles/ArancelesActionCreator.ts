import { Dispatch } from 'redux';
import { ArancelesApi } from '../../../api/rest/ArancelesApi';
import {
  AddArancelesAction,  
  GetArancelesListAction,
  GetArancelesDetailsAction,
  SelectArancelesAction,
  UpdateArancelesAction,
    ActionTypes
} from './ArancelesActionTypes';

import { typesModels, ICuentas } from '../../../models';




const addCuentaAction = (cuenta: typesModels): AddArancelesAction => {
    return {
        type: ActionTypes.ADD_ARANCELES,
        cuenta
    }
}

export const getCuentasList = (listAranceles: typesModels[]): GetArancelesListAction => {
    return {
        type: ActionTypes.GET_ALL_ARANCELES,
        listAranceles
    }
}

export const getCuentasDetails = (arancelesDetail: typesModels): GetArancelesDetailsAction => {
    return {
        type: ActionTypes.GET_ARANCELES_DETAIL,
        arancelesDetail
    }
}

export const selectCuentas = (selectAranceles: typesModels): SelectArancelesAction => {
    return {
        type: ActionTypes.SELECT_ARANCELES,
        selectAranceles
    }
}



export const updateCuentas = (ArancelesId: number | string, Aranceles: typesModels, index: number): UpdateArancelesAction => {
    return {
        type: ActionTypes.UPDATE_ARANCELES,
        ArancelesId,
        Aranceles,
        index
    }
}
 
export const cargarListaCuentasFalsas = (cuentas) =>{
    return getCuentasList(cuentas)
}

export const getAllAranceles = () => {
    return (dispatch: Dispatch) => {

        return new ArancelesApi()
            .getAllAranceles()
            .then(resp => {
                dispatch(getCuentasList(resp.data))
            })
            .catch(err => console.log(err))
    }
}


export const addAranceles = (cuenta: ICuentas) => {
    return (dispatch: Dispatch) => {

        return new ArancelesApi()
            .addAranceles(cuenta)
            .then(resp => {
                dispatch(addCuentaAction(resp.data))
            })
            .catch(err => console.log(err))

    }

}