import { useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { AppState } from '../../Redux/state/AppState';
import { Cell, CellEdit } from '../Cell';
import FormMovimientosCtacte from '../Formularios/FormMovimientosCtacte';

import IconButton from "@material-ui/core/IconButton";
//Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";

//acciones
import { editModeAction, revertirAction, actualizarAction } from '../../Redux/actions/ctacte/CtacteActionCreator';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        borderRadius: 20,
        height: '100%',
    },
    tableContainer: {
        height: '70%',
        overflow: 'scroll',
    },
    container: {
        height: '80vh',
        width: "100%",
    },
    rowHeader: {
        background: '#fff',
        width: "100%"
    },
    formContainer: {
        width: "100%",
        height: 'max-content',
    }
});

const ModalTable = ({ columns }) => {

    const { ctacte, previous, configForm } = useSelector((state: AppState) => state.CtacteState);
    const [dataEdit, setDataEdit] = useState({ ...previous })
    const classes = useStyles();
    const dispatch = useDispatch();
    const cargarPrev = (data) => {
        setDataEdit({
            ...dataEdit,
            ...data
        })
    }

    const handleChangeEdit = ({ target }: any | ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target
        setDataEdit({
            ...dataEdit,
            [name]: value
        })
    }

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                <h2>
                    titulo
                </h2>
            </Grid>
            <Grid item xs={12} className={classes.tableContainer}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead className={classes.rowHeader}>
                        <TableRow>
                            {
                                columns.length && columns.map((col, i) =>

                                    <Cell
                                        variant="head"
                                        width={col.width}
                                        key={i}>{col.title}
                                    </Cell>
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            ctacte.length && ctacte.map((data, index) =>
                                <TableRow key={index}>
                                    {data.isEditMode ? (
                                        <>
                                            <IconButton
                                                aria-label="done"
                                                onClick={() => dispatch(actualizarAction(dataEdit))}
                                            >
                                                <DoneIcon />
                                            </IconButton>
                                            <IconButton
                                                aria-label="revert"
                                                onClick={() => dispatch(revertirAction())}
                                            >
                                                <RevertIcon />
                                            </IconButton>
                                        </>
                                    ) : (
                                        <IconButton
                                            aria-label="editar"
                                            onClick={() => {
                                                cargarPrev(data);
                                                dispatch(editModeAction(data.id))
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    )}
                                    {
                                        columns.map(key => {
                                            return key.title === " " ? null :
                                                <CellEdit
                                                    values={dataEdit[key.title.toLowerCase()]}
                                                    onChange={handleChangeEdit}
                                                    row={data}
                                                    name={key.title.toLowerCase()}
                                                    width={key.width}
                                                    align={key.align} />
                                        })}
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>

            </Grid>
            <Grid item xs={12} className={classes.formContainer}>
                {

                    Object.entries(configForm).length && <FormMovimientosCtacte />
                }
            </Grid>
        </Grid>
    );
}

export default ModalTable