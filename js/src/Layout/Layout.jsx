import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';

//Components
import Header from '../componentes/Header'
import AppBar from './AppBar';

const drawerWidth = 50;

const useStyles = makeStyles((theme) =>
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
            background:'#f1f8ff',
        },
        table: {
            borderRadius: 5,
            padding:theme.spacing(2),
            overflow:'hidden',
            background: '#FFF'
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
                    <AppBar/>       
                    <div className={classes.table}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
