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

const columnas = [
  {title:"ID"},
  {title:"CodFac"},
  {title:"CodCar"},
  {title:"Descripcion"},
  {title:"CantCuotas"},
  {title:"IDSede"},
  {title:"Grupo Barrida"},
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
    actionsInHeader={["imprimir","nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
    widthModal={'60vw'}
    FormRegister={<FormCuentas width='100%' />}
  />
}

export default Cuentas