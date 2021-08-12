import React, { FC, ReactNode } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Controls from '../Forms/Controls';
import { Typography, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux'

//actions


interface Props {
    children?: ReactNode | any,
    check?: boolean,
    variant?: "body" | "head" | "footer" | undefined
    checkAll?: boolean
    width?: string,
    align?: "left" | "right" | "inherit" | "center" | "justify",
}

//Style align center checkbox
const useStyles = makeStyles(() =>
    createStyles({
        body: {
            fontWeight: 400,
            color: '#395596',
            border: 'none',
            borderBottom: 'solid 1px #f5f9fc',
            padding: '8px 15px',
        },
        editCell: {
            padding: 5
        }
    })
)

//styled and build new cell component
const StyledTableCell = withStyles((theme: Theme) => ({
    head: {
        color: "#8cbaff",
        fontWeight: 600,
        padding: 4,
        paddingLeft: theme.spacing(2),
        border: 'none',
        textTransform: 'none',

    },
    body: {
        fontWeight: 400,
        color: '#395596',
        border: 'none',
        borderBottom: 'solid 1px #f5f9fc',
        padding: '8px 15px',
        alignItems: 'center'
    },
}))(TableCell);

export const Cell = (props) => {
    const { width = 'max-content', children, align } = props
    return (
        <StyledTableCell
            {...props}
            width={width}
            align={align}>
            <Typography variant="body2" >{children}</Typography>
        </StyledTableCell>
    )
}

// Cell checkBox
export const CellCheckBox: FC<Props> = ({ checkAll, check = false, variant = "body" }) => {
    const classes = useStyles()
    return (
        <StyledTableCell
            title={checkAll ? 'Seleccionar Todos' : ''}
            variant={variant}>
            <div>
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
export const CellAction = (props) => {
    const { children, align = "right" } = props
    const classes = useStyles()

    return (
        <TableCell
            align={align}
            width='100px'
            className={classes.body}
        >
            <Typography variant="body2">{children}</Typography>
        </TableCell>
    )
}


export const CellEdit = ({ row, name, onChange, width, align, values }) => {
    const { isEditMode } = row;
    const classes = useStyles()
    return (
        <TableCell
            width={width}
            align={align}
            className={classes.editCell}
        >
            {isEditMode ? (

                <Controls.Input
                    inputProps={{ style: { fontSize: 12 } }}
                    InputLabelProps={{ style: { fontSize: 12 } }}
                    fullWidth
                    label={name}
                    value={values}
                    name={name}
                    onChange={onChange}
                />

            ) : (
                row[name.toLowerCase()]
            )}
        </TableCell>
    );
};