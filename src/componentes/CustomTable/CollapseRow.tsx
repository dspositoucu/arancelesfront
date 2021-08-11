import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { TableHead, TableRow } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { Row } from '../Row';
import { Cell, CellAction } from '../Cell'
import ButtonIcon from '../Buttons/ButtonIcon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Typography } from '@material-ui/core';

//acciones
import { getCtacte } from '../../Redux/actions/ctacte/CtacteActionCreator';

//mmodal
import Modal from '../Modals/Modal'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },

    collapseTable: {
        overflow: 'hidden',
        background: '#FFF'
    },

    borderOpen: {
        borderLeft: 'solid 5px #8cbaff ',
        background: '#d9e8ff'
    },

    borderClose: {
        borderLeft: 'solid 5px transparent ',
    }

});

const CollapseTable = ({ tableColapseHead, tableColapseName, children, cargarDatos, forms, id }) => {


    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [secondaryTable, setSecondaryTable] = useState([])
    const [openModal, setOpenModal] = useState({
        form1: false,
        form2: false
    })

    const [Form1, Form2] = forms
    const cargarTabla = async () => {
        setSecondaryTable([])
        setSecondaryTable(await cargarDatos(id))
    }
    useEffect(() => {
        cargarTabla()
    }, [id])

    const handleOpenModal = (form) => {
        // console.log("Event",event.target)
        setOpenModal({
            ...openModal,
            [form]: !openModal[form]
        })
    }
    const classes = useRowStyles();

    return (
        <>
            <Modal
                active={openModal["form1"]}
                closeModal={() => handleOpenModal("form1")}>
                {Form1}
            </Modal>

            <Modal
                active={openModal["form2"]}
                closeModal={() => handleOpenModal("form2")}>
                {Form2}
            </Modal>
            <Row className={`${classes.root} ${open ? classes.borderOpen : classes.borderClose}`}>
                <Cell width={'25'}>
                    <IconButton aria-label="expand row" size="small" onClick={
                        () => {
                            setOpen(!open)
                        }}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </Cell>
                {children}
            </Row>
            <Row className={`${open ? classes.borderOpen : classes.borderClose}`}>
                <TableCell style={{ padding: 0, borderTop:"none" }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {
                            secondaryTable.length
                                ? <Box >
                                    <Table className={classes.collapseTable} size="small" aria-label="purchases">
                                        <TableHead>
                                            <TableRow>
                                                {tableColapseHead.map((col, i) => <Cell key={i} variant={"head"}>{col}</Cell>)}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {

                                                secondaryTable && secondaryTable.map((data, j) => {
                                                    return (
                                                        <Row key={j}>
                                                            {
                                                                tableColapseHead.map((key, z) => <Cell key={z}>{data[key.toLowerCase()]} </Cell>)

                                                            }
                                                            <CellAction align='right' width='100px' >
                                                                <ButtonIcon
                                                                    endIcon="ctacte"
                                                                    hover={false}
                                                                    onClick={() => {
                                                                        handleOpenModal("form1");
                                                                        dispatch(getCtacte(data["idcuentapersona"]))
                                                                    }}
                                                                />
                                                                <ButtonIcon
                                                                    endIcon="recibo"
                                                                    hover={false}
                                                                    onClick={() => handleOpenModal("form2")}
                                                                />
                                                            </CellAction>
                                                        </Row>)
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </Box>
                                : <Typography variant={"h4"}>No posee cuentas asociadas</Typography>
                        }
                    </Collapse>
                </TableCell>
            </Row>
        </>
    );
}

export default CollapseTable