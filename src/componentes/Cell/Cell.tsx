import React, { FC, ReactNode } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { useDispatch } from 'react-redux'

//actions
import { selectAllPerson } from '../../Redux/actions/personas/ActionCreator'
import { Typography } from '@material-ui/core';

interface Props {
    children?: ReactNode | any,
    check?: boolean,
    variant?: "body" | "head" | "footer" | undefined
    checkAll?: boolean
    width?:string
}

//Style align center checkbox
const useStyles = makeStyles(() =>
    createStyles({
        IconCell: {
            display: 'flex',
            alignItems: 'center',
            cursor: "pointer"
        },
    })
)

//styled and build new cell component
const StyledTableCell = withStyles((theme:Theme) => ({
    head: {
        color: "#8cbaff",
        fontWeight: 600,
        padding: 4,
        paddingLeft:theme.spacing(2),
        border:'none',
        textTransform: 'none',

    },
    body: {
        fontWeight:400,
        color: '#395596',
        border:'none',
        borderBottom: 'solid 1px #f5f9fc',
        padding: '8px 15px',
        alignItems: 'center'
    },
}))(TableCell);

export const Cell: FC<Props> = (props) => {
    const { width='max-content' ,children, variant = "body" } = props
    return (
        <StyledTableCell 
        width={width}
        {...props}>
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
        <StyledTableCell 
            variant="body">
            <div className={classes.IconCell}>
               <Typography>{children}</Typography> 
            </div>
        </StyledTableCell>
    )
}
