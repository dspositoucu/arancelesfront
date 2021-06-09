import React, { FC, ReactNode } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

interface Props {
    children?: ReactNode | any,
    check?: Boolean,
}

//Style align center checkbox
const useStyles = makeStyles(() =>
    createStyles({
        IconCell: {
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

export const Cell: FC<Props> = ({ children }) => {
    return (
        <StyledTableCell>
            {children}
        </StyledTableCell>
    )
}

// Cell checkBox
export const CellCheckBox: FC<Props> = ( {check=false} ) => {
    const classes = useStyles()

    return (
        <StyledTableCell>
            <div className={classes.IconCell}>
                {
                    check 
                        ? <CheckBoxIcon/> 
                        : <CheckBoxOutlineBlankIcon/>
                }
            </div>
        </StyledTableCell>
    )
}

// IconCell 
export const CellAction: FC<Props> = ( {children} ) => {
    const classes = useStyles()

    return (
        <StyledTableCell style={{ width: 100 }}>
            <div className={classes.IconCell}>
                {children}
            </div>
        </StyledTableCell>
    )
}
