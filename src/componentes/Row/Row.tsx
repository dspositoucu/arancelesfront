import React, { FC, ReactNode } from 'react'
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
import { Cell, CellCheckBox, CellAction } from '../Cell'
import { useDispatch, useSelector } from 'react-redux';

//tipos
import { IPersona } from '../../models';
import { AppState } from '../../Redux/state/AppState';


//actions
import { selectPerson } from '../../Redux/actions/personActionCreator';

//icons 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
interface Props {
  data: any
}

//creando un nuevo componente StyledTableRow con nuevos estilos de color intercalado 
const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#D9D5EC"
    }
  }
}))(TableRow);

export const Row: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const { selectListPerson } = useSelector( (state:AppState) => state.PersonState )



  if(!data)return null;

      //seleccionar una fila 
    const handleSelectRow = (data:IPersona) =>{
        dispatch(selectPerson(data))
    }

    // checkear si la fila se encuentra en lista de seleccionado para cambiar el checkbox 
    const checkListSelect = (id:string) =>{
      return  !!selectListPerson.filter((data)=> data.id===id)[0]
    }

  const keysData: string[] = Object.keys(data)
  return (
    <StyledTableRow onClick={()=>handleSelectRow(data)}>
      <CellCheckBox check={checkListSelect(data.id)} />
      {
        keysData.map((key, index) => {
          return key !== 'selected' && (    
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

//Row Header Table
export const RowHeader: FC<Props> = ({ data }) => {
  
  const { selectListPerson } = useSelector( (state:AppState) => state.PersonState )
  if(!data)return null
  const keysData: string[] = Object.keys(data)
  
  let rowHeader: ReactNode[] = keysData.map(( key, index ) => {
    return key !== 'selected' && (
      <Cell variant="head" key={ index }>
        { key.toUpperCase() }
      </Cell>
    )})
      rowHeader.unshift(<CellCheckBox check={!!selectListPerson.length} checkAll variant="head"/>);
      rowHeader.push(<Cell variant="head">ACCIONES</Cell>);

  return(
    <StyledTableRow>
      {rowHeader}
    </StyledTableRow>
  )
}


