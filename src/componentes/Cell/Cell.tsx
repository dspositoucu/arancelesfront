import React, { FC, ReactNode } from 'react'
import clsx from 'clsx' 
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

interface Props {
    children?: ReactNode | any,
    check?: Boolean,
    variant?: "body"|"head"|"footer"|undefined
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
const StyledTableCell = withStyles( () => ({
    head: {
        backgroundColor: "#F2F0F9",
        color: "#6E6893",
        padding: 7,
    },
    body: {
        fontSize: 14,
        color: '#6E6893',
        padding: 7,
        alignItems: 'center'
    },
}))(TableCell);

export const Cell: FC<Props> = ({ children, variant="body",check }) => {
    return (
        <StyledTableCell variant={variant}>
            {children}
        </StyledTableCell>
    )
}

// Cell checkBox
export const CellCheckBox: FC<Props> = ( {check=false , variant="body"} ) => {
    const classes = useStyles()

    return (
        <StyledTableCell variant={variant}>
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
        <StyledTableCell variant="body" style={{ width: 100 }}>
            <div className={classes.IconCell}>
                {children}
            </div>
        </StyledTableCell>
    )
}
