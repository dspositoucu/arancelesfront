import React, {useEffect, useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//data example
import {personas} from '../../dataTable.json';

//models
import { IPersona } from '../../models'

//component
import { Row, RowHeader } from '../Row';
import MenuHeaderTable from './MenuHeaderTable';
import TablePaginationActions from './TablePaginationActions'

const useStyles = makeStyles( (theme: Theme)=>
createStyles({
    table: {
        minWidth: 600,
    },
    styleRow: {
        height: "auto"
    },
    tableContainer:{
        borderRadius:10
    },
    paginationTable:{
        color: '#6E6893',
        height:35
    },
    footer:{
        height:35
    }
}));

    const CustomTable = () => {
    const classes = useStyles();
    const [dataPersona, setDataPersona] = useState<IPersona[]>(personas)
    const [dataFilter, setDataFilter] = useState<IPersona[] | []>(personas)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(18);

    useEffect(()=>{
        setDataPersona(personas)
    },[])

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, personas.length - page * rowsPerPage);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //filter searchbar for name  
    const filter = ({ target }: React.ChangeEvent<HTMLInputElement>):void => {
        if(!personas.length) return
        let nameSearch = target.value;
         let filter = dataPersona.filter(persona=>{
            let per = persona.nombre.toLowerCase() 
            return per.includes(nameSearch.toLowerCase())
        });
        setDataFilter(filter);
    }

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <MenuHeaderTable 
                label={"Buscar por nombre"} 
                filter={filter}
            />

            <Table className={classes.table} aria-label="tabla">
                <TableBody>
                    <RowHeader data={dataPersona[0]} />
                    {(rowsPerPage > 0
                        ? dataFilter.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) || dataPersona.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
                        : dataFilter || dataPersona
                    ).map((persona) => (
                        <Row data={persona}/>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 39 * emptyRows }}>
                            <TableCell colSpan={15} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter >
                    <TableRow className={classes.footer}>
                        <TablePagination
                            className={classes.paginationTable}
                            align="right"
                            rowsPerPageOptions={[5,10,18,/*  { label: 'All', value: -1 } */]}
                            colSpan={9}
                            count={ dataFilter ? dataFilter.length : dataPersona.length }
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default CustomTable