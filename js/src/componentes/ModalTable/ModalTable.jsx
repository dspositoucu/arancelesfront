import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Cell, CellEdit } from '../Cell';
import FormMovimientosCtacte from '../Formularios/FormMovimientosCtacte';
import IconButton from "@material-ui/core/IconButton";

//Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";

//acciones
import { editModeAction, revertirAction, actualizarAction } from '../../Redux/actions/ctacte/CtacteActionCreator';

const width='70vw'

const useStyles = makeStyles((theme) =>
    createStyles({
        table: {
            minWidth: 650,
            borderRadius: 20,
            height: '100%',
        },
        tableContainer: {
            maxHeight: '70%',
            minHeight: 'auto',
            overflow: 'scroll',
            borderRadius: 10,
            border: 'solid 1px lightGray',
            [theme.breakpoints.down("md")]: {
                maxHeight: '65%'
            }
        },
        container: {
            height: '100%',
            width: width,
            [theme.breakpoints.down("md")]: {
                height: '92vh'
            }
        },
        rowHeader: {
            background: '#fff',
            width: "100%"
        },
        formContainer: {
            width: "100%",
            height: 'auto',
        }
    }));

const ModalTable = ({ columns }) => {

    const { ctacte, previous, configForm, totalDebe, totalHaber, saldoTotal } = useSelector((state) => state.CtacteState);
    const [dataEdit, setDataEdit] = useState({ ...previous })
    const classes = useStyles();
    const dispatch = useDispatch();
    const cargarPrev = (data) => {
        setDataEdit({
            ...dataEdit,
            ...data
        })
    }

    console.log("CONFIGURACION ", configForm)

    const handleChangeEdit = ({ target })=> {
        const { name, value } = target
        setDataEdit({
            ...dataEdit,
            [name]: value
        })
    }
    /* periodismo lic per y tec de com , loc  sao testsc gest estado de alumnos por materia  */
    return (
        <Grid container className={classes.container}>
            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">{`${configForm.codigo} - ${configForm.nombre} [${configForm.codcar}-${configForm.codfac}]-${configForm.cuenta}`}</Typography>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">
                            TOTALES
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">
                            {`Debe $${totalDebe}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">
                            {`Haber $${totalHaber}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">
                            {`Saldo $${saldoTotal}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.tableContainer}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead className={classes.rowHeader}>
                        <TableRow>
                            {
                                columns.length && columns.map((col, i) =>

                                    <Cell
                                        align={col.align}
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

                    Object.entries(configForm).length && <FormMovimientosCtacte width={width} />
                }
            </Grid>
        </Grid>
    );
}

export default ModalTable