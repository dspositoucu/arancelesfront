import React, { FC } from 'react'
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Toolbar } from '@material-ui/core';

//icons
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

//component 
import ButtonHeader from '../Button'
import SearchBarTable from './SearchBarTable'

interface Props {
    label: string
}

const useStyles = makeStyles(() => 
createStyles({
        root: {
            height: 75,
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        },
        titleTable:{
            color: '#25213B',
            fontWeight: 500
        }
}))

const MenuHeaderTable: FC<Props> = ({ label = "Buscar por Nombre" }) => {
    const classes = useStyles()
    return (
        <Toolbar className={classes.root}>
            <Typography className={classes.titleTable} variant="h5">Listado de Personas</Typography>
            <ButtonHeader label={"Imprimir"} icon={<PrintIcon/>}/>
            <ButtonHeader label={"Nuevo"} icon={<PersonAddIcon/>}/>
            <ButtonHeader label={"Borrar"} icon={<DeleteIcon/>}/>
            <SearchBarTable/>
        </Toolbar>
    )
}
export default MenuHeaderTable