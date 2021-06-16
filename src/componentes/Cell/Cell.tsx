import React, { FC, ReactNode } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { useDispatch } from 'react-redux'

//actions
import { selectAllPerson } from '../../Redux/actions/ActionCreator'

interface Props {
    children?: ReactNode | any,
    check?: boolean,
    variant?: "body" | "head" | "footer" | undefined
    checkAll?: boolean
}

//Style align center checkbox
const useStyles = makeStyles(() =>
    createStyles({
        IconCell: {
            display: 'flex',
            alignItems: 'center',
            width: 30,
            marginLeft: 20,
            cursor: "pointer"
        },
    })
)

//styled and build new cell component
const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: "#F2F0F9",
        color: "#6E6893",
        padding: 5,
    },
    body: {
        fontSize: 13,
        color: '#6E6893',
        padding: 5,
        alignItems: 'center'
    },
}))(TableCell);

export const Cell: FC<Props> = ({ children, variant = "body" }) => {
    return (
        <StyledTableCell variant={variant}>
            {children}
        </StyledTableCell>
    )
}

// Cell checkBox
export const CellCheckBox: FC<Props> = ({ checkAll, check = false, variant = "body" }) => {

    const dispatch = useDispatch()

    const handleAllSelect = () => {
        if (variant === "head") {
            dispatch(selectAllPerson())
        }
    }

    const classes = useStyles()
    return (
        <StyledTableCell
            onClick={handleAllSelect}
            title={checkAll ? 'Seleccionar Todos' : ''}
            variant={variant}>
            <div className={classes.IconCell}>
                {
                    check
                        ? <CheckBoxIcon />
                        : <CheckBoxOutlineBlankIcon />
                }
            </div>
        </StyledTableCell>
    )
}

// IconCell 
export const CellAction: FC<Props> = ({ children }) => {
    const classes = useStyles()

    return (
        <StyledTableCell variant="body" style={{ width: 100 }}>
            <div className={classes.IconCell}>
                {children}
            </div>
        </StyledTableCell>
    )
}
