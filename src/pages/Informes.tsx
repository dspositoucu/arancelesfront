import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../componentes/CustomTable'

//modelos
import { AppState } from '../Redux/state/AppState';

//acciones
import { getAllPersonas } from '../Redux/actions/ActionCreator'

const Informes = () => {

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
    columns={["idpersonas", "nombrepersona", "codcar", "idcuenta", "nombrecuenta"]}
    actionsInHeader={["imprimir", "nuevo", "borrar"]}
    actionInRow={['editar']}
    rowChek={false}
    formRegister={{
      titleForm: 'Registrar Nueva Persona',
      buttonSubmitLabel: 'Registrar',
      fields: [
        {
          name: "nombre",
          isEdit:false,
          label: "Nombre Completo"
        },
        {
          name: "email",
          isEdit:true,
          label: "Email",
          type: "email"
        },
        {
          name: "sexo",
          isEdit:false,
          label: "Sexo",
        },
        {
          name: "fecnac",
          isEdit:false,
          label: "Fecha de Nacimiento",
          type: "date"
        },
        {
          name: "ndoc",
          isEdit:false,
          label: "Nº de Documento",
        },
        {
          name: "telefono",
          isEdit:true,
          label: "Telefono",
        },
        {
          name: "domicilio",
          isEdit:true,
          label: "Domicilio",
        },
        {
          name: "cuit",
          isEdit:false,
          label: "Cuit",
        },
        {
          name: "tipodoc",
          isEdit:false,
          label: "Tipo de doc",
        },
        {
          name: "idperaul",
          isEdit:false,
          label: "idperaul",
        },
        {
          name: "codigo",
          isEdit:false,
          label: "Codigo",
        },
        {
          name: "baja",
          isEdit:true,
          label: "Baja",
        },
      ]
    }
    }
  />
}

export default Informes