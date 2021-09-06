import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'
import ModalTable from '../../componentes/ModalTable/ModalTable';

//formulario
import FormPersonas from './FormPersonas'
import ReciboGeneral from '../../componentes/Recibos/ReciboGeneral';

//acciones
import { getAllPersonas } from '../../Redux/actions/personas/ActionCreatorPersona'

//consultas api /personas
import { PersonaApi } from '../../api/PersonaApi';

const Personas = () => {
  const dispatch = useDispatch()
  const { listaPersonas } = useSelector((state) => state.PersonState)

  const cargarDatos = () => {
    dispatch(getAllPersonas())
  }

  const columns = [
    { title: " ", width: 25 },
    { title: "ID" },
    { title: "Nombre" },
    { title: "Ndoc" },
    { title: "Telefono" },
    { title: "Email" },
    { title: "Domicilio" }
  ]

  const modalTableColumns = [
    { title: " ", width: 25 },
    { title: "FecMov", width: 'max-content' },
    { title: "Concepto", width: '30%' },
    { title: "Debe", width: '15%', align: 'right' },
    { title: "Haber", width: '15%', align: 'right' },
    { title: "Saldo", width: '15%', align: 'right' }
  ]

  useEffect(() => {
    cargarDatos()
  }, [])

  // El componente Table recibe dos props 
  // -tableData: correspone a los datos que se quieren renderizar 
  // -columns: corresponde a las columnas de la tabla que se quieren renderizar
  // -actions (OPCIONAL): acciones para realizar en la tabla 

  return <>
    <Table
      tableData={listaPersonas}
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
      getDataTableSecondary={
        async (personaId) => {
          return new PersonaApi()
            .getCuentasByPersonaId(personaId)
            .then(resp => resp.data)
        }
      }

      // props para la tabla secundaria
      secondaryForms={[
        <ModalTable columns={modalTableColumns} />,
        <ReciboGeneral data={{}} />
      ]}
      secondaryColumn={["Nombre de cuenta", "CodCar", "Saldo", "Activo", "Autorizado", "Baja", "Nota"]}
    />
  </>
}

export default Personas