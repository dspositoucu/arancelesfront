import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'
import FormBarrida from './FormBarrida'


//lista cuentas falsas
import listaCuentas from '../../fakeData/cuentas.json'
//modelos
import { AppState } from '../../Redux/state/AppState';

//Actions
import { getAllBarridas, cargarListaCuentasFalsas } from '../../Redux/actions/barridas/BarridasActionCreator'

const Barridas = () => {

  const { listBarridas } = useSelector((state: AppState) => state.BarridasState)



  const dispatch = useDispatch()

  const cargarDatos = () => {
    dispatch(getAllBarridas())
  }
  useEffect(() => {
    cargarDatos()
  }, [])

  const columns = [
    { title: "ID" },
    { title: "Descripcion" },
    { title: "Barrida" },
    { title: "Grupo" },
    { title: "Generado" },
    { title: "Enviado" },
    { title: "Recibido" },
    { title: "Entregado" },
    { title: "FBarrida" },
    { title: "Acreditacion" },
    { title: "Recibos" }
  ]

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
    tableData={listBarridas}
    columns={columns}
    actionsInHeader={["imprimir", "nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
    FormRegister={<FormBarrida />}
  />
}

export default Barridas