import React, { FC, ReactNode } from 'react'
import { makeStyles, createStyles, Theme, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { CssBaseline } from "@material-ui/core";

//Components
import Header from '../Header'
import ListMenu from '../ListMenu'

interface Props {
    children: ReactNode
}

const drawerWidth = 140;


const theme = createMuiTheme({
    overrides: {
      MuiToolbar: {
        regular: {
          '@media(min-width:600px)' : {
            minHeight:"48px",
            padding: "0px 7px 0px 14px"
          }
        }
      }
    }
  });


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
            height:'100vh'
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(1),
            margin: theme.spacing(1)
        },
    }),
);

const Layout: FC<Props> = ({ children }) => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                {/* <Header title="Sistema de Arancelamiento" /> */}
                <ListMenu />
            </Drawer>
            <main className={classes.content}>
                {children}
            </main>
        </div>
        </MuiThemeProvider>
    )
}

export default Layout
