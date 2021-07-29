import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import RowHeader from './RowHeader';
import { Cell, CellAction } from '../Cell'
import ButtonIcon from '../Buttons/ButtonIcon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Typography } from '@material-ui/core';

//mmodal
import Modal from '../Modals/Modal'
import { FormatColorResetSharp } from '@material-ui/icons';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },

    collapseTable:{
        overflow:'hidden',
        borderRadius:'5px',
        background:'#FFF',
    },

    fondoCollapseTable:{
        background: '#8cbaff'
    }

});

const CollapseTable = ({ tableColapseHead, tableColapseName, children, cargarDatos, forms }) => {

    const [open, setOpen] = useState(false);
    const [secondaryTable, setSecondaryTable] = useState([])
    const [openModal, setOpenModal] = useState({
        form1:false,
        form2:false
    })

     const [formulario1, fomulario2] = forms

    const cargarTabla = async () => {
        setSecondaryTable(await cargarDatos())
    }
    useEffect(() => {
        cargarTabla()
    }, [])

    const handleOpenModal = (form) =>{
       // console.log("Event",event.target)
        setOpenModal({
            ...openModal,
            [form]:!openModal[form]
        })
    }
    const classes = useRowStyles();

    return (
        <>
        <Modal
            active={openModal["form1"]}
            closeModal={()=>handleOpenModal("form1")}>
            {formulario1}
        </Modal>

        <Modal
            active={openModal["form2"]}
            closeModal={()=>handleOpenModal("form2")}>
            {fomulario2}
        </Modal>
            <TableRow className={classes.root}>
                <Cell>
                    <IconButton aria-label="expand row" size="small" onClick={
                        () => {
                            setOpen(!open)
                        }}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </Cell>
                {children}
            </TableRow>
            <TableRow>
                <TableCell  className={classes.fondoCollapseTable} style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {
                            secondaryTable.length
                                ? <Box margin={1}>
                                    <Table className={classes.collapseTable} size="small" aria-label="purchases">
                                        <RowHeader columns={tableColapseHead}>
                                            {tableColapseHead.map((col, i) => <Cell key={i} variant={"head"}>{col}</Cell>)}
                                        </RowHeader>
                                        <TableBody>
                                            {

                                                secondaryTable && secondaryTable.map((data, j) => {
                                                    return (
                                                        <TableRow key={j}>
                                                            {
                                                                tableColapseHead.map((key, z) => <Cell key={z}>{data[key.toLowerCase()]} </Cell>)
                                                            }
                                                            <CellAction>
                                                                <ButtonIcon
                                                                    endIcon="editar"
                                                                    hover={false}
                                                                    onClick={()=>handleOpenModal("form1")}
                                                                />
                                                                   <ButtonIcon
                                                                    endIcon="nuevo"
                                                                    hover={false}
                                                                    onClick={()=>handleOpenModal("form2")}
                                                                />
                                                            </CellAction>
                                                        </TableRow>)
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </Box>
                                : <Typography variant={"h4"}>No posee cuentas asociadas</Typography>
                        }
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default CollapseTable