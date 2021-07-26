import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'

//lista cuentas falsas
import listaCuentas from '../../fakeData/cuentas.json' 

//modelos
import { AppState } from '../../Redux/state/AppState';

//Actions
import { getAllMovimientos } from '../../Redux/actions/caja/CajasActionCreator'; 

const Caja = () => {

  const { movimientos } = useSelector((state: AppState) => state.CajaState)


  const dispatch = useDispatch()

  const cargarDatos = () => {
    dispatch(getAllMovimientos())
  }
  useEffect(() => {
    cargarDatos()
  }, [])

  // El componente Table recibe dos props 
  // -tableData: correspone a los datos que se quieren renderizar 
  // -columns: corresponde a las columnas de la tabla que se quieren renderizar
  // -actions (OPCIONAL): acciones para realizar en la tabla 

  return <Table
    filterSearchBar={[
      {
        key: "DESCRIPCION",
        label: "Descripcion"
      },
    ]}
    filterMenu={false}
    tableData={movimientos}
    columns={[
      "fechaMov", 
      "Descripcion", 
      "Monto", 
      "Recibo", 
      "Descripcion Cuenta", 
      "codAlu", 
      "Nombre de persona", 
      "Modos de pago", 
      "NroComprobante", 
      "Sobre", 
      "Anulado", 
      "Transferido"]}
    actionsInHeader={["imprimir","nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
  />
}

export default Caja