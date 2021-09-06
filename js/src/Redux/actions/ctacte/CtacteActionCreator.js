import { CtacteApi } from '../../../api/CtacteApi';

export const ActionTypes = {
    ADD_CTACTE: "ADD_CTACTE",
    GET_ALL_CTACTE: 'GET_ALL_CTACTE',
    GET_CTACTE_DETAIL: 'GET_CTACTE_DETAIL',
    SELECT_CUENTA: 'SELECT_CUENTA',
    UPDATE_CTACTE: 'UPDATE_CTACTE',
    EDIT_MODE: "EDIT_MODE",
    REVERTIR: "REVERTIR",
    ACTUALIZAR: "ACTUALIZAR",
    RESET_CONFIG: "RESET_CONFIG"
}

export const revertirAction = () => {
    return {
        type: ActionTypes.REVERTIR,
    }
}

export const resetConfigAction = () => {
    return {
        type: ActionTypes.RESET_CONFIG
    }
}

export const addAsientoAction = (asiento) => {
    return {
        type: ActionTypes.ADD_CTACTE,
        asiento
    }
}

const getCtacteList = (listCtacte) => {
    return {
        type: ActionTypes.GET_ALL_CTACTE,
        listCtacte
    }
}

export const getCtacteDetails = (asientoDetails) => {
    return {
        type: ActionTypes.GET_CTACTE_DETAIL,
        asientoDetails
    }
}

export const selectCtacte = (selectAsiento) => {
    return {
        type: ActionTypes.SELECT_CUENTA,
        selectAsiento
    }
}

export const updateCtacteAction = (idAsiento, newAsiento) => {
    return {
        type: ActionTypes.UPDATE_CTACTE,
        idAsiento,
        newAsiento,
    }
}

export const editModeAction = (idMov) => {
    return {
        type: ActionTypes.EDIT_MODE,
        idMov
    }
}

export const actualizarAction = (newData) => {
    return {
        type: ActionTypes.ACTUALIZAR,
        newData
    }
}

export const getCtacte = (idCuentaPersona) => {
    return (dispatch) => {
        return new CtacteApi()
            .getCtacte(idCuentaPersona)
            .then(resp => dispatch(getCtacteList(resp.data)))
            .catch(err => console.log("ERROR GET CUENTA CORRIENTE ", err))
    }
}

