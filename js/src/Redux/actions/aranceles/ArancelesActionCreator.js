import { ArancelesApi } from '../../../api/ArancelesApi';

export const  ActionTypes = {
    ADD_ARANCELES : "ADD_ARANCELES",
    GET_ALL_ARANCELES : 'GET_ALL_ARANCELES',
    GET_ARANCELES_DETAIL : 'GET_ARANCELES_DETAIL',
    SELECT_ARANCELES : 'SELECT_ARANCELES',
    UPDATE_ARANCELES : 'UPDATE_ARANCELES',
  }

const addCuentaAction = (cuenta)=> {
    return {
        type: ActionTypes.ADD_ARANCELES,
        cuenta
    }
}

export const getCuentasList = (listAranceles) => {
    return {
        type: ActionTypes.GET_ALL_ARANCELES,
        listAranceles
    }
}

export const getCuentasDetails = (arancelesDetail) => {
    return {
        type: ActionTypes.GET_ARANCELES_DETAIL,
        arancelesDetail
    }
}

export const selectCuentas = (selectAranceles) => {
    return {
        type: ActionTypes.SELECT_ARANCELES,
        selectAranceles
    }
}



export const updateCuentas = (ArancelesId, Aranceles, index) => {
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
    return (dispatch) => {

        return new ArancelesApi()
            .getAllAranceles()
            .then(resp => {
                dispatch(getCuentasList(resp.data))
            })
            .catch(err => console.log(err))
    }
}


export const addAranceles = (cuenta) => {
    return (dispatch) => {

        return new ArancelesApi()
            .addAranceles(cuenta)
            .then(resp => {
                dispatch(addCuentaAction(resp.data))
            })
            .catch(err => console.log(err))
    }
}