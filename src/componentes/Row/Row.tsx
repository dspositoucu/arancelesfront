import React, { FC, ReactNode } from 'react'
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
import { Cell, CellCheckBox, CellAction } from '../Cell'
import { useDispatch, useSelector } from 'react-redux';

//components
import ButtonIcon from '../Buttons/ButtonIcon';

//types
import { typesModels } from '../../models';
import { AppState } from '../../Redux/state/AppState';

//actions
import { selectPerson } from '../../Redux/actions/personas/ActionCreator';
import { openModalEdit } from '../../Redux/actions/modales/ActionCreatorModals';

interface Props {
  data?: any,
  columns: string[]
  rowChek?:boolean
}

//creando un nuevo componente StyledTableRow con nuevos estilos de color intercalado 
const StyledTableRow = withStyles(() => ({
  root: {
    border:'none',
    boxShadow:'none'
  }
}))(TableRow);

export const Row: FC<Props> = ({ data, columns, rowChek }) => {
  const dispatch = useDispatch();
  const { selectListPerson } = useSelector((state: AppState) => state.PersonState)

  if (!data) return null;

  //comprobar el listado de columnas enviadas por props y las
  // que existen en la tabla de datos.
  // se devuelve un array con las columnas que coinciden 
  //const compareColumn = (): string[] => columns.filter(key => !!data[key])
  
  //seleccionar una fila 
  const handleSelectRow = (data: typesModels) => {
    console.log(data)
    dispatch(selectPerson(data))
  }

  // checkear si la fila se encuentra en lista de seleccionado para cambiar el checkbox 
  const checkListSelect = (id: string) => {
    return !!selectListPerson.find((data) => data.id === id)
  }
  return (
    <StyledTableRow
      onClick={() => handleSelectRow(data)}
      style={rowChek && checkListSelect(data.id) ? { background: '#C3B3E7' } : {}}
    >
      { rowChek && <CellCheckBox check={checkListSelect(data.id)} />}
      {
        columns.map((key, index) => {
          return (
            <Cell key={index}>
              {data[key.toLowerCase()]}
            </Cell>
          )
        })
      }
      <CellAction>
        <ButtonIcon 
          iconType="editar" 
          hover={false}
          onClick={()=>dispatch(openModalEdit())}
          />
      </CellAction>
    </StyledTableRow>
  )
}



