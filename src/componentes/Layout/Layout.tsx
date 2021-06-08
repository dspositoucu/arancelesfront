import React, { FC, ReactNode } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { CssBaseline } from "@material-ui/core";


//Components
import Header from '../Header'
import ListMenu from '../ListMenu'

interface Props {
    children: ReactNode
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: '#F2F0F9',
            display: 'flex',
            minHeight: '100vh',
            flex: 1
        },

        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            margin: theme.spacing(2)
        },
    }),
);

const Layout: FC<Props> = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header title="Sistema de Arancelamiento" />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <ListMenu />
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {children}
            </main>
        </div>
    )
}

Layout.propTypes = {
    // your expected props
}

Layout.defaultProps = {
    // your default props
}
export default Layout
