import React, { FC, ReactNode } from 'react'
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';
import { Cell } from '../Cell'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rowHeader: {
            height: 50,
        }
    }))

interface Props {
    data?: any,
    columns: string[]
    rowChek?: boolean
    children?: ReactNode | any[]
}

const RowHeader: FC<Props> = ({ columns, rowChek, children }) => {
    const classes = useStyles()

    //rowChek && rowHeader.unshift(<CellCheckBox key={'check'} check={!!selectListPerson.length} checkAll variant="head" />);

    return (
        <TableHead className={classes.rowHeader}>
            <TableRow>
                {children}
                <Cell key={'head'} variant="head">Acciones</Cell>
            </TableRow>
        </TableHead>
    )
}
export default RowHeader