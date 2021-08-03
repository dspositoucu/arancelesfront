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
import ReciboX from '../../componentes/Recibos/ReciboX';
import ReciboGeneral from '../../componentes/Recibos/ReciboGeneral';

//acciones
import { getAllPersonas, cargarListaPersonasFalsas } from '../../Redux/actions/personas/ActionCreator'

//consultas api /personas
import { PersonaApi } from '../../api/rest/PersonaApi';

const ListaPersonas = () => {
  const dispatch = useDispatch()
  const { listPerson } = useSelector((state: AppState) => state.PersonState)

  const cargarDatos = () => {
    //if (ListaFalsa.length <= 0) {
    dispatch(getAllPersonas())
    //}
  }

  const columns = [
    {
      title: " ",
      width: 25
    },
    { title: "ID" },
    { title: "Nombre" },
    { title: "Ndoc" },
    { title: "Telefono" },
    { title: "Email" },
    { title: "Domicilio" }
  ]

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
    columns={columns}
    actionsInHeader={["imprimir", "nuevo", "borrar"]}
    actionInRow={['editar']}
    rowChek={false}
    FormRegister={<FormPersonas />}
    widthModal={'50vw'}
    filterSearchBar={[
      {
        key: "NOMBRE",
        label: "Nombre"
      },
      {
        key: "NDOC",
        label: "Nro Documneto"
      }
    ]}
    collapseRow={
      async (personaId) => {
        return new PersonaApi()
          .getCuentasByPersonaId(personaId)
          .then(resp => resp.data)
      }
    }

    // props para la tabla secundaria
    secondaryForms={[<ReciboX />, <ReciboGeneral />]}
    secondaryColumn={["Nombre de cuenta", "CodCar", "Saldo", "Activo", "Autorizado", "Baja", "Nota"]}
  />
}

export default ListaPersonas