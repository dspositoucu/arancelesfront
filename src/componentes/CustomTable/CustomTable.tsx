import { FC, useState,ReactNode } from 'react';
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
import RegisterModal from '../Modals/registerModal'

//interface
import IFilterSearchBar from './interface/IFilterSearchBar';

//actions
import { openModalRegister } from '../../Redux/actions/modales/ActionCreatorModals';

//models
import { typesModels,IPersona, IInformes } from '../../models'
import { AppState } from '../../Redux/state/AppState';

//custom hooks
import { useFilter } from '../../hooks/useFilter';
import { usePagination } from '../../hooks/usePagination';

//forms
import Register from '../Forms/Register'

//component
import { Row, RowHeader } from '../Row';
import MenuHeaderTable from './MenuHeaderTable';
import TablePaginationActions from './TablePaginationActions'
import FormAranceles from '../../pages/Aranceles/FormAranceles'

interface Props {
    tableData: any[]
    columns: string[],
    actionsInRow?: string[],
    FormRegister?: ReactNode,
    filterSearchBar?:IFilterSearchBar[],
    actionsInHeader: string[],
    actionInRow:string[],
    rowChek:boolean,
    filterMenu:boolean
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

const CustomTable: FC<Props> = ({ filterSearchBar, tableData, columns, actionsInHeader, FormRegister, rowChek, filterMenu }) => {
    const dispatch = useDispatch()
    const classes = useStyles();

    //  estados de modales 
   const { modalRegister, modalEdit } = useSelector((state:AppState)=>state.ModalState)
   const { personDetails } = useSelector((state:AppState)=>state.PersonState)


    // useFilter recibe la tabla a filtrar y devuelve 
    // una funcion handleFilter, la lista filtrada y
    // una const tipo bool. "tableFilterinUse" que corresponde a si la tabla esta en uso. 
    const {filterList, handleFilter, tableFilterinUse } = useFilter(tableData)

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
                <RegisterModal
                    closeModal={()=>dispatch(openModalRegister())}
                    active={modalRegister}
                    >
                        {FormRegister}
                </RegisterModal>
            }
            <MenuHeaderTable
                filterMenu={filterMenu}
                filter={handleFilter}
                buttonsList={actionsInHeader}
                filterSearchBar={filterSearchBar}
            />
            <Table className={classes.table} aria-label="tabla">
                <TableBody>
                    <RowHeader 
                        rowChek={rowChek}
                        columns={columns} />
                    {tableData.length ? (rowsPerPage > 0
                        ? ActualPage(tableData, filterList)
                        : tableData
                    ).map((persona, i) => (
                        <Row
                            rowChek={rowChek}
                            key={i}
                            columns={columns}
                            data={persona}
                        />
                    )) : null}
                    {emptyRows > 0 ? (
                        <TableRow style={{ height: 35 * emptyRows }}>
                            <TableCell colSpan={15} />
                        </TableRow>
                    ) : null}
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