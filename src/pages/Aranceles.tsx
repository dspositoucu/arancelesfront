import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../componentes/CustomTable'

//modelos
import { AppState } from '../Redux/state/AppState';

//Actions
import { getAllAranceles } from '../Redux/actions/aranceles/ArancelesActionCreator'

const Aranceles = () => {

  const { listAranceles } = useSelector((state: AppState) => state.ArancelesState)


  const dispatch = useDispatch()

  const cargarDatos = () => {
    dispatch(getAllAranceles())
  }
  useEffect(() => {
    cargarDatos()
  }, [])

  console.log("ESTOS SON LOS ARANCELES >>>>> ",listAranceles )

  // El componente Table recibe dos props 
  // -tableData: correspone a los datos que se quieren renderizar 
  // -columns: corresponde a las columnas de la tabla que se quieren renderizar
  // -actions (OPCIONAL): acciones para realizar en la tabla 

  return <Table
    filterSearchBar={[
      {
        key: "NOMBRE DE CUENTA",
        label: "Nombre de Cuenta"
      },
    ]}
    filterMenu={false}
    tableData={listAranceles}
    columns={["CODFAC", "CODCAR", "IDCUENTA", "NOMBRE DE CUENTA", "DESCRIPCION", "MES", "ANIO", "MONTO", "BONIFICACION", "RECARGO", "BIBLIOTECA", "DEBITA"]}
    actionsInHeader={["imprimir","nuevo"]}
    actionInRow={['editar']}
    rowChek={false}
    formRegister={{
      titleForm: 'Crear Nueva Cuenta',
      buttonSubmitLabel: 'Crear Cuenta',
      fields: [
        {
          name: "codfac",
          isEdit: true,
          label: "Codigo Facultad"
        },
        {
          name: "codcar",
          isEdit: true,
          label: "Codigo Carrera",
        },
        {
          name: "descripcion",
          isEdit: true,
          label: "Descripcion",
        },
        {
          name: "area",
          isEdit: true,
          label: "Area",
        },
        {
          name: "idcarrera",
          isEdit: true,
          label: "ID Carrera",
        },
        {
          name: "idgrupobarrida",
          isEdit: true,
          label: "ID Grupo Barrida",
        },
        {
          name: "cantcuotas",
          isEdit: true,
          label: "Cantidad de Cuotas",
        },
        {
          name: "idsede",
          isEdit: true,
          label: "ID sede",
        },
        
      ]
    }
  }
  />
}

export default Aranceles