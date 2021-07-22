import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import Table from '../../componentes/CustomTable'
import FormAranceles from './FormAranceles'

//modelos
import { AppState } from '../../Redux/state/AppState';

//Actions
import { getAllAranceles } from '../../Redux/actions/aranceles/ArancelesActionCreator'
import arancelesReducer from '../../Redux/reducers/arancelesReducer';

const Aranceles = () => {

  const { listAranceles } = useSelector((state: AppState) => state.ArancelesState)


  const dispatch = useDispatch()

  const cargarDatos = () => {
    dispatch(getAllAranceles())
  }
  useEffect(() => {
    cargarDatos()
  }, [])

  console.log("ESTOS SON LOS ARANCELES >>>>> ",listAranceles.map(arancels=>arancels["NOMBRE DE CUENTA"]) )

  // El componente Table recibe dos props 
  // -tableData: correspone a los datos que se quieren renderizar 
  // -columns: corresponde a las columnas de la tabla que se quieren renderizar
  // -actions (OPCIONAL): acciones para realizar en la tabla 

  let listaSelect = listAranceles.map(arancels=>arancels["NOMBRE DE CUENTA"])

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
    FormRegister={<FormAranceles selectList={listaSelect}/>}
  />
}

export default Aranceles