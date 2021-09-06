import { CajaApi } from '../../../api/CajaApi';

export const ActionTypes={
    GET_ALL_MOVIMIENTOS_CAJA : 'GET_ALL_MOVIMIENTOS_CAJA',
    ADD_MOVIMIENTOS_CAJA : 'ADD_MOVIMIENTOS_CAJA',
    GET_MOVIMIENTOS_CAJA_DETAIL : 'GET_MOVIMIENTOS_CAJA_DETAIL',
    SELECT_MOVIMIENTOS_CAJA : 'SELECT_MOVIMIENTOS_CAJA',
    UPDATE_MOVIMIENTOS_CAJA : 'UPDATE_MOVIMIENTOS_CAJA',
  }

export const getMovimientosCajaAction = (listMovimientosCaja)=> {
    return {
        type: ActionTypes.GET_ALL_MOVIMIENTOS_CAJA,
        listMovimientosCaja
    }
}

export const addMovimientosCajaAction = (movimiento)=> {
    return {
        type: ActionTypes.ADD_MOVIMIENTOS_CAJA,
        movimiento
    }
}

export const getMovimientosCajaDetailsAction = (MovimientosCajaDetails)=> {
    return {
        type: ActionTypes.GET_MOVIMIENTOS_CAJA_DETAIL,
        MovimientosCajaDetails
    }
}


export const updateMovimientosCajaAction = (movimientosCajaId, movimientosCaja, index)=> {
    return {
        type: ActionTypes.UPDATE_MOVIMIENTOS_CAJA,
        movimientosCajaId,
        movimientosCaja,
        index
    }
}

export const getAllMovimientos = () => {
    return (dispatch) => {

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


