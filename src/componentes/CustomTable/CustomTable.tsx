import { FC, useState, useEffect, ReactNode } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//modals 
import Modal from '../Modals/Modal'

//interface
import IFilterSearchBar from './interface/IFilterSearchBar';

//actions
import { openModalRegister } from '../../Redux/actions/modales/ActionCreatorModals';

//models
import { typesModels, IPersona, IInformes } from '../../models'
import { AppState } from '../../Redux/state/AppState';

//custom hooks
import { useFilter } from '../../hooks/useFilter';
import { usePagination } from '../../hooks/usePagination';

//forms
//import Register from '../Forms/Register'

//component
import RowHeader from './RowHeader';
import { Row } from '../Row';
import MenuHeaderTable from './MenuHeaderTable';
import TablePaginationActions from './TablePaginationActions'
import { Cell } from '../Cell'
import CollapseRow from './CollapseRow'

interface Props {
    tableData: any[]
    columns: string[],
    actionsInRow?: string[],
    FormRegister?: ReactNode,
    filterSearchBar?: IFilterSearchBar[],
    actionsInHeader: string[],
    actionInRow: string[],
    rowChek: boolean,
    filterMenu: boolean,
    collapseRow?: Function,
    secondaryColumn?: String[]
}

// estilos css-in-js
const useStyles = makeStyles(() =>
    createStyles({
        table: {
            minWidth: 600,
            width: "100% !important",
            overflow: 'hidden',
            boxSizing: 'content-box'
        },
        tableContainer: {
            borderRadius: '0px 5px 5px 5px',
            boxShadow: 'none'
        },
        paginationTable: {
            color: '#6E6893',
            height: 35,
        },
        footer: {
            height: 35
        }
    }));

const CustomTable: FC<Props> = ({ filterSearchBar, tableData, columns, actionsInHeader, FormRegister, rowChek, filterMenu, collapseRow, secondaryColumn }) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [secondaryTable, setSecondaryTable] = useState([])

    //  estados de modales 
    const { modalRegister, modalEdit } = useSelector((state: AppState) => state.ModalState)

    // useFilter recibe la tabla a filtrar y devuelve 
    // una funcion handleFilter, la lista filtrada y
    // una const tipo bool. "tableFilterinUse" que corresponde a si la tabla esta en uso. 
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
            {/* ================= MODALES =================*/}
            {modalRegister &&
                <Modal
                    closeModal={() => dispatch(openModalRegister())}
                    active={modalRegister}
                >
                    {FormRegister}
                </Modal>
            }
            <MenuHeaderTable
                filterMenu={filterMenu}
                filter={handleFilter}
                buttonsList={actionsInHeader}
                filterSearchBar={filterSearchBar}
            />
            <Table className={classes.table} aria-label="tabla">
                <RowHeader
                    rowChek={rowChek}
                    columns={columns}
                >
                    {
                        columns.map((col, i) => <Cell variant="head" key={i}>{col}</Cell>)
                    }
                </RowHeader>
                <TableBody>
                    {tableData.length ? (rowsPerPage > 0
                        ? ActualPage(tableData, filterList)
                        : tableData
                    ).map((data, i) => {
                        console.log('ESTE ES EL ID', data.id.toString())
                        return !collapseRow
                            ? <Row
                                rowChek={rowChek}
                                key={i}
                                columns={columns}
                                data={data}
                            >
                                {
                                    columns.map((key, i) => {
                                        return (
                                            <Cell key={i}>
                                                {data[key.toLowerCase()]}
                                            </Cell>
                                        )
                                    })
                                }
                            </Row>
                            : <CollapseRow
                                cargarDatos={async () => await collapseRow(data.id)}

                                key={i}
                                tableColapseName={"Cuentas"}
                                tableColapseHead={secondaryColumn}>
                                {
                                    columns.map((key, j) => {
                                        return (
                                            <Cell
                                                key={j}
                                                variant="body">
                                                {data[key.toLowerCase()]}
                                            </Cell>
                                        )
                                    })
                                }
                            </CollapseRow>

                    }) : null}
                    {emptyRows > 0 ? (
                        <TableRow style={{ height: 35 * emptyRows }}>
                            <TableCell colSpan={15} />
                        </TableRow>
                    ) : null}
                </TableBody>
                <TableFooter className={classes.footer} >
                    <TableRow>
                        <TablePagination
                            className={classes.paginationTable}
                            align="right"
                            rowsPerPageOptions={[5, 10, 18]}
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