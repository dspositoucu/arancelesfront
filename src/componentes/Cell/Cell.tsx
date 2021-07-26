import React, { FC, ReactNode } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { useDispatch } from 'react-redux'

//actions
import { selectAllPerson } from '../../Redux/actions/personas/ActionCreator'

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
        color: "#6c74fa",
        fontWeight: 600,
        padding: 4,
        paddingLeft:'15px',
        border:'none',
        textTransform: 'none',
        fontSize:'12px',

    },
    body: {
        fontWeight:400,
        minWidth:50,
        maxWidth:200,
        fontSize: 12,
        color: '#395596',
        border:'none',
        borderBottom: 'solid 1px #f5f9fc',
        padding: '8px 15px',
        alignItems: 'center'
    },
}))(TableCell);

export const Cell: FC<Props> = ({ children, variant = "body" }) => {
    return (
        <StyledTableCell  variant={variant}>
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
