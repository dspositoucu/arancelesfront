import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../componentes/CustomTable'

//modelos
import { AppState } from '../Redux/state/AppState';
// datos de ejemplo
import { personas } from '../dataTable.json'

//acciones
import { getPersonList } from '../Redux/actions/personActionCreator'


const ListaPersonas = () => {

  const { listPerson } = useSelector((state: AppState) => state.PersonState)

  const dispatch = useDispatch()

  
  const cargarDatos = () => {
    if(listPerson.length<=0){
      dispatch(getPersonList(personas))
    }
  }
  useEffect(() => {
    cargarDatos()
  }, [])


  // El componente Table recibe dos props 
  //tableData: correspone a los datos que se quieren renderizar 
  // columns: corresponde a las columnas de la tabla que se quieren renderizar 

  return <Table
          tableData={listPerson}
          columns={["id", "nombre", "n_doc", "telefono", "email", "domicilio"]}
    />
}

export default ListaPersonas