import React, { FC } from 'react'
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Toolbar } from '@material-ui/core';

//component 

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
        }
}))

const MenuHeaderTable: FC<Props> = ({ label = "Buscar por Nombre" }) => {
    const classes = useStyles()
    return (
        <Toolbar className={classes.root}>
            <Typography variant="h5">Listado de Personas</Typography>
            <SearchBarTable/>
        </Toolbar>
    )
}
export default MenuHeaderTable