import  { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//custom hooks
import { useFilter } from '../../hooks/useFilter';
import { usePagination } from '../../hooks/usePagination';

//component
import { Row, RowHeader } from '../Row';
import MenuHeaderTable from './MenuHeaderTable';
import TablePaginationActions from './TablePaginationActions'


interface Props {
    tableData: Object[],
    columns: string[],
}

// estilos css-in-js
const useStyles = makeStyles(() =>
    createStyles({
        table: {
            minWidth: 600,
        },
        styleRow: {
            height: "auto"
        },
        tableContainer: {
            borderRadius: 10
        },
        paginationTable: {
            color: '#6E6893',
            height: 35
        },
        footer: {
            height: 35
        }
    }));

const CustomTable:FC<Props> = ({tableData, columns}) => {

    const classes = useStyles();

    
    // custom hooks
    const { dataFilter, handleFilter } = useFilter(tableData)
    const {
        page, 
        rowsPerPage, 
        handleChangePage, 
        handleChangeRowsPerPage } = usePagination(18)
        
    console.log("Lista de filtrada ",dataFilter)
    /* 
    emptyRows se usa para rellenar el espacio faltante 
    de la tabla para mantener el tamaño correspondiente 
    a filas por pagina 
    */
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, (dataFilter.length || tableData.length) - page * rowsPerPage);

    // filas correspondientes a la pagina ctual
    const ActualPage = (listData: Object[]) => {
        return listData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    }

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <MenuHeaderTable
                label={"Buscar por nombre"}
                filter={handleFilter}
            />

            <Table className={classes.table} aria-label="tabla">
                <TableBody>

                    {/* RowHeader recive "data" como props que es una lista de  */}
                    <RowHeader columns={columns} />
                    {tableData.length && (rowsPerPage > 0 
                        ? ActualPage(tableData)
                        : tableData
                    ).map((persona) => (
                        <Row columns={columns} data={persona} />
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
                            rowsPerPageOptions={[5, 10, 18,/*  { label: 'All', value: -1 } */]}
                            colSpan={9}
                            count={dataFilter.length || tableData.length}
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