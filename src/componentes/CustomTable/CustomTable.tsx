import { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//actions
import { getAllPersonas } from '../../Redux/actions/ActionCreator';

//models
import { typesModels } from '../../models'

//custom hooks
import { useFilter } from '../../hooks/useFilter';
import { usePagination } from '../../hooks/usePagination';

//component
import { Row, RowHeader } from '../Row';
import MenuHeaderTable from './MenuHeaderTable';
import TablePaginationActions from './TablePaginationActions'

interface Props {
    tableData: typesModels[],
    columns: string[],
    actionsInRow?: string[],
    actionsInHeader: string[]
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
            borderRadius: 10,
            boxShadow: '0px 4px 25px rgba(148, 130, 255, 0.51)',
        },
        paginationTable: {
            color: '#6E6893',
            height: 35
        },
        footer: {
            height: 35
        }
    }));

const CustomTable: FC<Props> = ({ tableData, columns, actionsInHeader }) => {
    const dispatch = useDispatch()
    const classes = useStyles();

    // custom hooks

    // useFilter recibe la tabla a filtrar y devuelve 
    //una funcion handleFilter, la lista filtrada y
    //una const tipo bool. "tableFilterinUse" que corresponde a si la tabla esta en uso. 
    const { filterList, handleFilter, tableFilterinUse } = useFilter(tableData)

    // usePagination devuelve: 
    // page: devuelve la pagina actual,
    // rowperPage: devuelve las filas por pagina,
    // handleChangePage: fun. para cambiar pagina,
    // handleChangeRowsPerPage: fun. para cambiar el numero de filas por pagina
    const {
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage } = usePagination(18)

    // emptyRows se usa para rellenar el espacio faltante 
    // de la tabla para mantener el tamaño correspondiente 
    // a filas por pagina 
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, (filterList.length || tableData.length) - page * rowsPerPage);

    // funcion que corta el array dependiendo las filas por paginas
    // y selecciona la lista correspondiente
    const ActualPage = (listData: Object[], listDataFilter: Object[] | []) => {

        return (tableFilterinUse
            ? listDataFilter
            : listData).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    }

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            {/* <button onClick={()=>{getAllPersonas(); console.log('asdaasdas')}}>TEST RUTA PERSONAS</button> */}
            <MenuHeaderTable
                filter={handleFilter}
                buttonsList={actionsInHeader}
            />
            <Table className={classes.table} aria-label="tabla">
                <TableBody>
                    <RowHeader columns={columns} />
                    {tableData.length ? (rowsPerPage > 0
                        ? ActualPage(tableData, filterList)
                        : tableData
                    ).map((persona, i) => (
                        <Row
                            key={i}
                            columns={columns}
                            data={persona}
                        />
                    )):null}
                    {emptyRows > 0 ?(
                        <TableRow style={{ height: 35 * emptyRows }}>
                            <TableCell colSpan={15} />
                        </TableRow>
                    ):null}
                </TableBody>
                <TableFooter >
                    <TableRow className={classes.footer}>
                        <TablePagination
                            className={classes.paginationTable}
                            align="right"
                            rowsPerPageOptions={[5, 10, 18,/*  { label: 'All', value: -1 } */]}
                            colSpan={9}
                            count={tableFilterinUse ? filterList.length : tableData.length}
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