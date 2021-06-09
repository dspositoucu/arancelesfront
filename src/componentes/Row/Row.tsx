import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

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

//Style align center checkbox
const useStyles = makeStyles(() =>
  createStyles({
    check: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  })
)

//styled and build new cell component
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
    color: '#6E6893',
    padding: 7,
    alignItems: 'center'
  },
}))(TableCell);


const Row: FC<Props> = ({ data }) => {
  const classes = useStyles()

  const keysData: string[] = Object.keys(data)

  console.log()
  return (
    <>
      <StyledTableRow key={data.ID}>
        <StyledTableCell padding="checkbox">
          <div className={classes.check}>
            <CheckBoxOutlineBlankIcon />
          </div>
        </StyledTableCell>
        {
          keysData.map((key, index) => {
            if (index === keysData.length) {
              return (
                <StyledTableCell key={index} style={{ width: 100 }}>
                  <AddCircleOutlineIcon />
                </StyledTableCell>
              )
            }
            return (
              <StyledTableCell key={index}>
                {data[key]}
              </StyledTableCell>
            )
          })
        }
      </StyledTableRow>
    </>
  )
}

export default Row