
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { AppState } from '../../Redux/state/AppState';
import { Cell } from '../Cell';
import FromMovimientosCtacte from '../Formularios/FromMovimientosCtacte';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        borderRadius:20,
        height:'100%',
    },
    tableContainer: {
        height:'50%',
        overflow: 'scroll',
    },
    container:{
        height:'80vh',
        width:"100%",
    },
    rowHeader: {
        background: '#fff',
        width: "100%"
    },
    formContainer: {
        width:"100%",
        height:'max-content',
    }
});

const ModalTable = ({ columns }) => {
    const { ctacte } = useSelector((state: AppState) => state.CtacteState)
    const classes = useStyles();
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
                            ctacte.length && ctacte.map(data =>
                                <TableRow>
                                    {
                                        columns.map(key =>
                                            <Cell
                                                width={key.width}
                                                align={key.align}
                                            >
                                                {data[key.title.toLowerCase()]}
                                            </Cell>)
                                    }
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>

            </Grid>
            <Grid item xs={12} className={classes.formContainer}>
                <FromMovimientosCtacte/>
            </Grid>
        </Grid>
    );
}

export default ModalTable