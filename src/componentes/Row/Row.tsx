import React, { FC, ReactNode } from 'react'
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
import { Cell, CellCheckBox, CellAction } from '../Cell'

//icons 
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
interface Props {
  data: any
}

//styled and build Component 
const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#D9D5EC"
    }
  }
}))(TableRow);

export const Row: FC<Props> = ({ data }) => {
  if(!data)return null
  const keysData: string[] = Object.keys(data)

  console.log(keysData.length)
  return (
    <StyledTableRow>
      <CellCheckBox />
      {
        keysData.map((key, index) => {
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

//Row Header Table
export const RowHeader: FC<Props> = ({ data }) => {
  if(!data)return null
  const keysData: string[] = Object.keys(data)
  
  let rowHeader: ReactNode[] = keysData.map(( key, index ) => {
    return(
      <Cell variant="head" key={ index }>
        { key }
      </Cell>
    )})
      rowHeader.push(<Cell variant="head">ACCIONES</Cell>);
      rowHeader.unshift(<CellCheckBox variant="head"/>);

  return(
    <StyledTableRow>
      {rowHeader}
    </StyledTableRow>
  )
}


