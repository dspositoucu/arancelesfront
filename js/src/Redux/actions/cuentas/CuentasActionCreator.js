import { CuentasApi } from '../../../api/CuentasApi';
import { ActividadesExtensionApi } from '../../../api/ActividadesExtensionApi';

export const ActionTypes = {
    ADD_CUENTAS : "ADD_CUENTAS",
    GET_ALL_CUENTAS : 'GET_ALL_CUENTAS',
    GET_CUENTAS_DETAIL : 'GET_CUENTAS_DETAIL',
    SELECT_CUENTA : 'SELECT_CUENTA',
    UPDATE_CUENTAS : 'UPDATE_CUENTAS',
  }

const addCuentaAction = (cuenta) => {
    return {
        type: ActionTypes.ADD_CUENTAS,
        cuenta
    }
}
export const getCuentasList = (listCuentas) => {
    return {
        type: ActionTypes.GET_ALL_CUENTAS,
        listCuentas
    }
}

export const getCuentasDetails = (cuentaDetails) => {
    return {
        type: ActionTypes.GET_CUENTAS_DETAIL,
        cuentaDetails
    }
}

export const selectCuenta = (selectCuenta) => {
    return {
        type: ActionTypes.SELECT_CUENTA,
        selectCuenta
    }
}

export const updateCuentaAction = (idCuenta, newCuenta) => {
    return {
        type: ActionTypes.UPDATE_CUENTAS,
        idCuenta,
        newCuenta,
    }
}

export const cargarListaCuentasFalsas = (cuentas) => {
    return getCuentasList(cuentas)
}

export const updateCuenta = (idCuenta, newCuenta) => {
    return (dispatch) => {
        return new CuentasApi()
            .updateCuenta(idCuenta, newCuenta)
            .then(resp => dispatch(updateCuentaAction(idCuenta, resp.data)))
            .catch(err => console.log("ERROR UPDATE CUENTA ", err))
    }
}

export const getAllCuentas = () => {
    return (dispatch) => {
        return new CuentasApi()
            .getAllCuentas()
            .then(resp => dispatch(getCuentasList(resp.data)))
            .catch(err => console.log(err))
    }
}

export const addCuentas = (cuenta) => {
    return (dispatch) => {
        return new CuentasApi()
            .addCuentas(cuenta)
            .then(resp => dispatch(addCuentaAction(resp.data)))
            .catch(err => console.log(err))
    }
}

export const getCuentasListSelect = () => {
    return new CuentasApi()
        .getCuentasList()
        .then(resp => resp.data)
        .catch(err => console.log(err))
}

export const getSedesListSelect = () => {
    return new CuentasApi()
        .getSedesList()
        .then(resp => resp.data)
        .catch(err => console.log(err))
}

export const getActividadesExtensionSelect = () => {
    return new ActividadesExtensionApi()
        .getActividadesExtension()
        .then(resp=>resp.data)
        .catch(err=>console.log(err))
}

export const getTiposCuenta = () => {
    return new CuentasApi() 
        .getTiposCuenta()
        .then(resp=>resp.data)
        .catch(err=>console.log("ERROR getTiposCuentas - CuentasApi ",err))
}
