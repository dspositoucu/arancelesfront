import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CellAction } from '../Cell';
import ButtonIcon from '../Buttons';
import { AppState } from '../../Redux/state/AppState';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
        overflow: 'scroll',
    },
    tableContainer: {
        height: '80vh'
    },
    rowHeader: {
        background: '#fff',
        width: '100%'
    }
});

const ModalTable = ({ columns }) => {
    console.log("COLUMNAS ", columns)
    const { ctacte } = useSelector((state: AppState) => state.CtacteState)
    console.log("datos de la cuenta cte ", ctacte)
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.rowHeader}>
                    <TableRow>
                        {
                            columns.length && columns.map((col, i) =>
                                <TableCell
                                    width={col.width}
                                    key={i}>{col.title}
                                </TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        ctacte.length && ctacte.map(data =>
                            <TableRow>
                                {
                                    columns.map(key =>
                                        <TableCell width={key.width}
                                            component="th"
                                            align={key.align}
                                            scope="row"
                                        >
                                            {data[key.title.toLowerCase()]}
                                        </TableCell>)
                                }
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ModalTable