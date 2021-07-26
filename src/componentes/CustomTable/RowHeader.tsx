import React, { FC, ReactNode } from 'react'
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';
import { Cell, CellCheckBox } from '../Cell'
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

//types
import { AppState } from '../../Redux/state/AppState';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rowHeader:{
            height:50,
        }
    }))


interface Props {
    data?: any,
    columns: string[]
    rowChek?: boolean
}

const RowHeader: FC<Props> = ({ columns, rowChek }) => {
    const classes = useStyles()

    const { selectListPerson } = useSelector((state: AppState) => state.PersonState)

    let rowHeader: ReactNode[] = columns.map((key, index) => {
        return (
            <Cell variant="head" key={index}>
                {key}
            </Cell>
        )
    })
    rowChek && rowHeader.unshift(<CellCheckBox key={'check'} check={!!selectListPerson.length} checkAll variant="head" />);
    rowHeader.push(<Cell key={'head'} variant="head">Acciones</Cell>);

    return (
        <TableHead className={classes.rowHeader}>
            <TableRow>
                {rowHeader}
            </TableRow>
        </TableHead>
    )
}
export default RowHeader