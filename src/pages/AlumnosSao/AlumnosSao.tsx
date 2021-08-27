import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'
import AlumnoSao from '../../componentes/Modales/AlumnoSao'
//lista cuentas falsas
import listaCuentas from '../../fakeData/cuentas.json'

//modelos
import { AppState } from '../../Redux/state/AppState';

//Actions
import { getAllNuevosAlunos, selectAlumno } from '../../Redux/actions/AlumnosSao/AlumnosSaoActionCreator';


const AlumnosSao = () => {
  const { alumnosSao } = useSelector((state: AppState) => state.AlumnosSaoState)
  const dispatch = useDispatch()
  const cargarDatos = () => {
    dispatch(getAllNuevosAlunos())
  }
  useEffect(() => {
    cargarDatos()
  }, [])

  const columns = [
    { title: "idp", width: '5%' },
    { title: "apellido", width: '10%' },
    { title: "nombre", width: '10%' },
    { title: 'ndoc', width: '10%' },
    { title: 'carreras', isArray: true, openModal: true, action:selectAlumno }
  ]

  // El componente Table recibe dos props 
  // -tableData: correspone a los datos que se quieren renderizar 
  // -columns: corresponde a las columnas de la tabla que se quieren renderizar
  // -actions (OPCIONAL): acciones para realizar en la tabla 

  return <Table
    filterSearchBar={[
      { key: "nombre", label: "Nombre" },
      { key: "ndoc", label: "N° Doc" },
    ]}
    filterMenu={false}
    tableData={alumnosSao}
    columns={columns}
    actionsInHeader={["imprimir", "nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
    widthModal="45vw"
    ModalDefault={<AlumnoSao />}
  />
}

export default AlumnosSao