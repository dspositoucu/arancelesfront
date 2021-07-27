import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Row } from '../Row';
import RowHeader from './RowHeader';
import { Cell } from '../Cell'
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const CollapseTable = ({ tableColapseHead, tableColapseName, children, cargarDatos }) => {
    const [open, setOpen] = useState(false);
    const [secondaryTable, setSecondaryTable] = useState([])

    const cargarTabla = async () => {
        setSecondaryTable(await cargarDatos())
    }
    useEffect(() => {
        cargarTabla()
    }, [])

    secondaryTable.map(d => console.log(d))
    const classes = useRowStyles();
    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={
                        () => {
                            setOpen(!open)
                        }}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {children}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {
                            secondaryTable.length
                                ? <Box margin={1}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {tableColapseName}
                                    </Typography>
                                    <Table size="small" aria-label="purchases">
                                        <RowHeader columns={tableColapseHead}>
                                            {tableColapseHead.map((col, i) => <Cell key={i} variant={"head"}>{col}</Cell>)}
                                        </RowHeader>
                                        <TableBody>
                                            {
                                                
                                                secondaryTable && secondaryTable.map((data,j) => {
                                                    return (
                                                    <TableRow key={j}>
                                                        {
                                                             tableColapseHead.map((key, z) => <Cell key={z}>{data[key.toLowerCase()]} </Cell>) 
                                                        }
                                                    </TableRow>)
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </Box>
                                : <h2>No posee cuentas asociadas</h2>
                        }
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default CollapseTable