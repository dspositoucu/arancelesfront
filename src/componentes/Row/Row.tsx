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
import { selectDataAction } from '../../Redux/actions/globalActions/ActionCreatorGlobal';

interface Props {
  data?: any,
  columns?: string[],
  rowChek?: boolean,
  children?: ReactNode | any
}

//creando un nuevo componente StyledTableRow con nuevos estilos de color intercalado 
const StyledTableRow = withStyles(() => ({
  root: {
    border: 'none',
    boxShadow: 'none',
  }
}))(TableRow);

export const Row = (props) => {
  const { data, rowChek, children } = props
  const dispatch = useDispatch();

  //seleccionar una fila 
  const handleSelectRow = (data: typesModels) => {
    dispatch(selectPerson(data))
  }
  return (
    <StyledTableRow
      {...props}
    >
      {rowChek && <CellCheckBox />}
      {children}
    </StyledTableRow>
  )
}



