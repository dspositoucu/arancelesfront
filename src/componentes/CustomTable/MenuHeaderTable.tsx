import React, { FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar } from '@material-ui/core';
import { NavLink, useLocation } from "react-router-dom";


//icons
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//component 
import ButtonHeader from '../Button'
import SearchBarTable from './SearchBarTable'

interface Props {
    label?: string,
    filter?: any
}

const useStyles = makeStyles(() => 
createStyles({
        root: {
            height: 50,
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        },
        titleTable:{
            color: '#6E6893',
        }
}))

const MenuHeaderTable: FC<Props> = ({ filter, label = "Buscar por Nombre" }) => {
    const classes = useStyles()
    return (
        <Toolbar className={classes.root}>
            <Typography className={classes.titleTable} variant="subtitle1">Listado de Personas</Typography>
            <ButtonHeader label={"Imprimir"} icon={<PrintIcon/>}/>
            <NavLink to={"/addPerson"}>
                <ButtonHeader label={"Nuevo"} icon={<PersonAddIcon/>}/>
            </NavLink>
            <ButtonHeader label={"Borrar"} icon={<DeleteIcon/>}/>
            <SearchBarTable functionFilter={filter}/>
        </Toolbar>
    )
}
export default MenuHeaderTable