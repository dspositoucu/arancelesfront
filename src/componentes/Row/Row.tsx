import React, { FC, ReactNode } from 'react'
import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
import { Cell, CellCheckBox, CellAction, CellHeader } from '../Cell'

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
  const keysData: string[] = Object.keys(data)
  
  let rowHeader: ReactNode[] = keysData.map(( key, index ) => {
    return(
      <CellHeader key={ index }>
        { key }
      </CellHeader>
    )})
      rowHeader.push(<CellHeader>ACCIONES</CellHeader>);
      rowHeader.unshift(<CellHeader/>);

  return(
    <StyledTableRow>
      {rowHeader}
    </StyledTableRow>
  )
}


