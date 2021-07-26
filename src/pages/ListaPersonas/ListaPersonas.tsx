import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'

//modelos
import { AppState } from '../../Redux/state/AppState';

//lista de personas falsas 
import ListaFalsa from '../../fakeData/personas.json'

//formulario
import FormPersonas from './FormPersonas'

//acciones
import { getAllPersonas, cargarListaPersonasFalsas } from '../../Redux/actions/personas/ActionCreator'

const ListaPersonas = () => {

  const dispatch = useDispatch()
  const { listPerson } = useSelector((state: AppState) => state.PersonState)


  const cargarDatos = () => {
    //if (ListaFalsa.length <= 0) {
      dispatch(getAllPersonas())
    //}
  }
  useEffect(() => {
    cargarDatos()
  }, [])

  // El componente Table recibe dos props 
  // -tableData: correspone a los datos que se quieren renderizar 
  // -columns: corresponde a las columnas de la tabla que se quieren renderizar
  // -actions (OPCIONAL): acciones para realizar en la tabla 

  return <Table
    tableData={listPerson}
    filterMenu={false}
    columns={["ID", "Nombre", "Ndoc", "Telefono", "Email", "Domicilio"]}
    actionsInHeader={["imprimir", "nuevo", "borrar"]}
    actionInRow={['editar']}
    rowChek={false}
    FormRegister={<FormPersonas/>}
    filterSearchBar={[
      {
        key: "NOMBRE",
        label: "Nombre"
      },
      {
        key:"NDOC",
        label:"Nro Documneto"
      }
    ]}
  />
}

export default ListaPersonas