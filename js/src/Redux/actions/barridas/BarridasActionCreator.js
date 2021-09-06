import { BarridasApi } from '../../../api/BarridasApi';

export const ActionTypes = {
    GET_ALL_BARRIDAS : 'GET_ALL_BARRIDAS',
    ADD_BARRIDAS : 'ADD_BARRIDAS',
    GET_BARRIDAS_DETAIL : 'GET_BARRIDAS_DETAIL',
    SELECT_BARRIDAS : 'SELECT_BARRIDAS',
    UPDATE_BARRIDAS : 'UPDATE_BARRIDAS',
  }

export const getBarridasListAction = (listBarridas)=> {
    return {
        type: ActionTypes.GET_ALL_BARRIDAS,
        listBarridas
    }
}

export const addBarridasAction = (barrida) => {
    return {
        type: ActionTypes.ADD_BARRIDAS,
        barrida
    }
}

export const getBarridasDetailsAction = (barridasDetails) => {
    return {
        type: ActionTypes.GET_BARRIDAS_DETAIL,
        barridasDetails
    }
}


export const updateCuentas = (BarridasId, Barridas, index) => {
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
    return (dispatch) => {

        return new BarridasApi()
            .getAllBarridas()
            .then(resp => {
                dispatch(getBarridasListAction(resp.data))
            })
            .catch(err => console.log(err))
    }
}


export const addBarrida = (cuenta) => {
    return (dispatch) => {
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
        .catch(err => console.log("ERROR LISTA GRUPO BARRIDA: ",err))
}
