import React, { FC } from 'react'
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


const Row: FC<Props> = ({ data }) => {
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

export default Row