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

  const columns = [
    { title: "fechaMov" },
    { title: "Descripcion" },
    {
      title: "Monto",
      width: 50
    },
    { title: "Recibo" },
    { title: "Descripcion Cuenta" },
    {
      title: "codAlu",
      width: 50
    },
    { title: "Nombre de persona" },
    { title: "Modos de pago" },
    { title: "Nro Comprobante" },
    { title: "Sobre" },
    { 
      title: "Anulado",
      width:30,
      type: Boolean
    },
    { 
      title: "Transferido", 
      width:30,
      type: Boolean
    }]

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
    columns={columns}
    actionsInHeader={["imprimir", "nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
  />
}

export default Caja