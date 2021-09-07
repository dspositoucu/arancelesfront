import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'
import FormBarrida from './FormBarrida'
import ActionMenu from '../../componentes/Menu/ActionMenu'
//Actions
import { getAllBarridas } from '../../Redux/actions/barridas/BarridasActionCreator'

const Barridas = () => {

  const { listBarridas } = useSelector((state) => state.BarridasState)
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
    { title: "Generado", },
    { title: "Enviado", type: 'boolean' },
    { title: "Recibido" },
    { title: "Entregado", name: "fechaentrega" },
    { title: "FBarrida", name: "fechabarrida" },
    { title: "Acreditacion", name: "fechaacreditacion" },
    { title: "Recibos", name: "fecharecibos" }
  ]


  const optionsMenuAction = [
    {
      title: "Subir Archivo",
      action: () => {},
      icon: "file",
      element:
        <label style={{ width:"100%", textAlign:'left'}}>
          <input type="file" style={{display:"none"}}/>
          Subir Archivo
        </label>
    },
    {
      title: "Informe de rechazos",
      action: () => {},
      icon: "view"
    },
    {
      title: "Pagaron mes Anterior y No Actual",
      action: () => {},
      icon: "view"
    },
    {
      title: "Pagaron mes Actual y No Anterior",
      action: () => {},
      icon: "view"
    }
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
    rowMenu={<ActionMenu options={optionsMenuAction} />}
    tableData={listBarridas}
    columns={columns}
    actionsInHeader={["imprimir", "nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
    FormRegister={<FormBarrida />}
  />
}

export default Barridas