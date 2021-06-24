import React, { FC, ReactNode } from 'react'
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
import { Cell, CellCheckBox, CellAction } from '../Cell'
import { useDispatch, useSelector } from 'react-redux';

//types
import { typesModels } from '../../models';
import { AppState } from '../../Redux/state/AppState';

//actions
import { selectPerson } from '../../Redux/actions/ActionCreator';

//icons 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
interface Props {
  data?: any,
  columns: string[]
}

//creando un nuevo componente StyledTableRow con nuevos estilos de color intercalado 
const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#D9D5EC"
    },
  }
}))(TableRow);

export const Row: FC<Props> = ({ data, columns }) => {
  const dispatch = useDispatch();
  const { selectListPerson } = useSelector((state: AppState) => state.PersonState)

  if (!data) return null;

  //comprobar el listado de columnas enviadas por props y las
  // que existen en la tabla de datos.
  // se devuelve un array con las columnas que coinciden 
  const compareColumn = (): string[] => columns.filter(key => !!data[key])
  
  //seleccionar una fila 
  const handleSelectRow = (data: typesModels) => {
    dispatch(selectPerson(data))
  }

  // checkear si la fila se encuentra en lista de seleccionado para cambiar el checkbox 
  const checkListSelect = (id: string) => {
    return !!selectListPerson.find((data) => data.id === id)
  }

  return (
    <StyledTableRow
      onClick={() => handleSelectRow(data)}
      style={checkListSelect(data.id) ? { background: '#C3B3E7' } : {}}
    >
      <CellCheckBox check={checkListSelect(data.id)} />
      {
        compareColumn().map((key, index) => {
          return (
            <Cell key={index}>
              {data[key]}
            </Cell>
          )
        })
      }
      <CellAction>
        <AddCircleOutlineIcon />
      </CellAction>
    </StyledTableRow>
  )
}


//===============================================
              //Row Header Table
//===============================================


export const RowHeader: FC<Props> = ({ columns }) => {

  const { selectListPerson } = useSelector((state: AppState) => state.PersonState)

  let rowHeader: ReactNode[] = columns.map((key, index) => {
    return (
      <Cell variant="head" key={index}>
        {key.toUpperCase()}
      </Cell>
    )
  })
  rowHeader.unshift(<CellCheckBox key={'check'} check={!!selectListPerson.length} checkAll variant="head" />);
  rowHeader.push(<Cell key={'head'} variant="head">ACCIONES</Cell>);

  return (
    <StyledTableRow>
      {rowHeader}
    </StyledTableRow>
  )
}


