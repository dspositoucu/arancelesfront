import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'
import FormCuentas from './FormCuentas'

//lista cuentas falsas
import listaCuentas from '../../fakeData/cuentas.json'

//modelos
import { AppState } from '../../Redux/state/AppState';

//Actions
import { getAllCuentas, cargarListaCuentasFalsas } from '../../Redux/actions/cuentas/CuentasActionCreator'

const Cuentas = () => {

  const { listCuentas } = useSelector((state: AppState) => state.CuentasState)

  const dispatch = useDispatch()

  const cargarDatos = () => {
    dispatch(getAllCuentas())
  }
  useEffect(() => {
    cargarDatos()
  }, [])

  // El componente Table recibe dos props 
  // -tableData: correspone a los datos que se quieren renderizar 
  // -columns: corresponde a las columnas de la tabla que se quieren renderizar
  // -actions (OPCIONAL): acciones para realizar en la tabla 

  /* LISTADO DE ACCIONES DISPONIBLES EN LAS FILAS: 
    - editar
  */

  const columnas = [
    { title: "ID", width: '5%' },
    { title: "CodFac", width: '5%' },
    { title: "CodCar", width: '5%' },
    { title: "Descripcion" },
    { name: "tipocuenta", title: "Tipo Cuenta", width: '15%' },
    { title: "CantCuotas", width: '10%' },
    { title: "Grupo Barrida", width: '10%' },
  ]
  return <Table
    filterSearchBar={[
      {
        key: "DESCRIPCION",
        label: "Descripcion"
      },
    ]}
    filterMenu={false}
    tableData={listCuentas}
    columns={columnas}
    actionsInHeader={["imprimir", "nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
    FormRegister={<FormCuentas width='100%' />}
  />
}

export default Cuentas