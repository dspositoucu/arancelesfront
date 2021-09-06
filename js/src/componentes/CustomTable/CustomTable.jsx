
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
import ButtonIcon from '../Buttons/ButtonIcon';
//modals 
import Modal from '../Modals/Modal'


//actions
import { openModalRegister,openModal } from '../../Redux/actions/modales/ActionCreatorModals';

//custom hooks
import { useFilter } from '../../hooks/useFilter';
import { usePagination } from '../../hooks/usePagination';

//component
import RowHeader from './RowHeader';
import { Row } from '../Row';
import MenuHeaderTable from './MenuHeaderTable';
import TablePaginationActions from './TablePaginationActions'
import { Cell, CellAction } from '../Cell'
import CollapseRow from './CollapseRow'

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

const CustomTable = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();

    const {
        filterSearchBar,
        modalTable,
        tableData,
        columns,
        actionsInHeader,
        FormRegister,
        filterMenu,
        getDataTableSecondary,
        secondaryColumn,
        secondaryForms,
        widthModal,
        actionInRow,
        heightModal,
        ModalDefault
    } =  props

    //  estados de modales 
    const { modalRegister, modalEdit, defaultModal } = useSelector((state) => state.ModalState)

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

    const ActualPage = (listData, listDataFilter) => {

        return (tableFilterinUse
            ? listDataFilter
            : listData).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    }
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            {/* ================= MODALES =================*/}

            {
                defaultModal &&
                <Modal
                    width={widthModal}
                    height={heightModal}
                    closeModal={() => dispatch(openModal())}
                    active={defaultModal}
                >
                    {ModalDefault}
                </Modal>
            }
            {modalRegister &&
                <Modal
                    width={widthModal}
                    height={heightModal}
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
                <RowHeader columns={columns} >
                    {
                        columns.map((col, i) => <Cell variant="head" key={i}>{col.title}</Cell>)
                    }
                </RowHeader>
                <TableBody>
                    {tableData.length ? (rowsPerPage > 0
                        ? ActualPage(tableData, filterList)
                        : tableData
                    ).map((data, i) => {
                        return !getDataTableSecondary
                            ? <Row
                                key={i}
                                columns={columns}
                                data={data}>
                                {
                                    columns.map((key, i) => {
                                        return (
                                            <Cell 
                                                allRowData={data}
                                                openModal={()=>key.openModal && dispatch(openModal())} 
                                                boolean={key.boolean} 
                                                isArray={key.isArray} 
                                                width={key.width}
                                                action={key.action} 
                                                key={i}>
                                                {
                                                    key.name
                                                        ? data[key.name.toLowerCase()]
                                                        : data[key.title.toLowerCase()]
                                                }
                                            </Cell>
                                        )
                                    })
                                }
                                <CellAction align='right' width='100px'>
                                    {
                                        actionInRow.map((accion, index) => <ButtonIcon key={index} endIcon={accion} data={data} />)
                                    }
                                </CellAction>
                            </Row>
                            : <CollapseRow
                                cargarDatos={async (id) => await getDataTableSecondary(id)}
                                id={data.id}
                                data={data}
                                forms={secondaryForms}
                                key={i}
                                tableColapseHead={secondaryColumn}>
                                {
                                    columns.map((key, j) => {
                                        return key.title === " " ? null :
                                            <Cell
                                                width={key.width}
                                                key={j}>
                                                {data[key.title.toLowerCase()]}
                                            </Cell>

                                    })
                                }
                                <CellAction align='right' width='100px'>
                                    {
                                        actionInRow.map((accion, index) => <ButtonIcon key={index} endIcon={accion} data={data} />)
                                    }
                                </CellAction>
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