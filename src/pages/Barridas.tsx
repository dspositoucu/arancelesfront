import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../componentes/CustomTable'


//lista cuentas falsas
import listaCuentas from '../fakeData/cuentas.json' 
//modelos
import { AppState } from '../Redux/state/AppState';

//Actions
import { getAllBarridas, cargarListaCuentasFalsas } from '../Redux/actions/barridas/BarridasActionCreator'

const Cuentas = () => {

  const { listCuentas } = useSelector((state: AppState) => state.CuentasState)


  const dispatch = useDispatch()

  const cargarDatos = () => {
    dispatch(getAllBarridas())
  }
  useEffect(() => {
    cargarDatos()
  }, [])

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
    tableData={listCuentas}
    columns={["ID", "CODFAC", "CODCAR", "DESCRIPCION", "CANTCUOTAS", "IDSEDE", "GRUPO BARRIDA"]}
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

export default Cuentas