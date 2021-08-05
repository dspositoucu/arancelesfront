import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllCuentas, cargarListaCuentasFalsas } from '../Redux/actions/cuentas/CuentasActionCreator'

//modelos
import { AppState } from '../Redux/state/AppState';

const useSetDataForm = () => {

    const { listCuentas } = useSelector((state: AppState) => state.CuentasState)
    
    const dispatch = useDispatch()
    
    const cargarDatos = () => {
      dispatch(getAllCuentas())
    }
    useEffect(() => {
      cargarDatos()
    }, [])
    

    return {

    }

}