import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'

//modelos
import { AppState } from '../../Redux/state/AppState';

// data fake 
import informesFake from '../../fakeData/informes.json'

//Actions
import { getAllDataInformes, cargarListaInformesFalsas } from '../../Redux/actions/informes/ActionCreatorInformes'

const Informes = () => {

  const { AllData } = useSelector((state: AppState) => state.InformesState)


  const dispatch = useDispatch()

  const cargarDatos = () => {
    dispatch(getAllDataInformes())
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
        key: "NOMBRE",
        label: "Nombre"
      },
    ]}
    filterMenu={true}
    tableData={AllData}
    columns={["idPersona", "Codalu", "Nombre", "CodCar", "IDCuenta", "Descripcion", "IDBeneficio", "Cbu"]}
    actionsInHeader={["imprimir"]}
    actionInRow={['editar']}
    rowChek={false}
  />
}

export default Informes