import { withStyles } from "@material-ui/core/styles";
import TableRow from '@material-ui/core/TableRow';
import { CellCheckBox } from '../Cell'

//creando un nuevo componente StyledTableRow con nuevos estilos de color intercalado 
const StyledTableRow = withStyles(() => ({
  root: {
    border: 'none',
    boxShadow: 'none',
  }
}))(TableRow);

export const Row = (props) => {
  const { rowChek, children } = props
  return (
    <StyledTableRow
      {...props}
    >
      {rowChek && <CellCheckBox />}
      {children}
    </StyledTableRow>
  )
}



