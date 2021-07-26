import React, { useState } from 'react'
import { makeStyles, createStyles, Theme, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

//Components
import Header from '../componentes/Header'
import ListMenu from '../componentes/ListMenu'

const drawerWidth = 50;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flex: 1
        },
        drawer: {
            width: drawerWidth,
            background: "#FFF"
        },

        childContainer: {
            flexGrow: 1,
            padding: theme.spacing(3),
            background:'#f3f4fb',
        },
        child: {
            borderRadius: 5
        },
    }),
);

const Layout = ({ children }) => {
    const classes = useStyles()
    return (
        <>
            <Header title="Sistema Aranceles" />
            <div className={classes.root}>
                <div className={classes.childContainer}>
                    <div className={classes.child}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
