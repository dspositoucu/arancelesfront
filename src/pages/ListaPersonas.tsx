import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../componentes/CustomTable'

//modelos
import { AppState } from '../Redux/state/AppState';

//acciones
import { getAllPersonas } from '../Redux/actions/ActionCreator'

const ListaPersonas = () => {

  const dispatch = useDispatch()
  const { listPerson } = useSelector((state: AppState) => state.PersonState)


  const cargarDatos = () => {
    if (listPerson.length <= 0) {
      dispatch(getAllPersonas())
    }
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
    columns={["id", "nombre", "ndoc", "telefono", "email", "domicilio"]}
    actionsInHeader={["imprimir", "nuevo", "borrar", "editar"]}
    formRegister={{
      titleForm: 'Registrar Nueva Persona',
      buttonSubmitLabel: 'Registrar',
      fields: [
        {
          name: "nombre",
          label: "Nombre Completo"
        },
        {
          name: "email",
          label: "Email",
          type: "email"
        },
        {
          name: "sexo",
          label: "Sexo",
        },
        {
          name: "fecnac",
          label: "Fecha de Nacimiento",
          type: "date"
        },
        {
          name: "ndoc",
          label: "Nº de Documento",
        },
        {
          name: "telefono",
          label: "Telefono",
        },
        {
          name: "domicilio",
          label: "Domicilio",
        },
        {
          name: "Cuit",
          label: "cuit",
        },
        {
          name: "tipodoc",
          label: "Tipo de doc",
        },
        {
          name: "idperaul",
          label: "idperaul",
        },
        {
          name: "codigo",
          label: "Codigo",
        },
        {
          name: "baja",
          label: "Baja",
        },
      ]
    }
    }
  />
}

export default ListaPersonas