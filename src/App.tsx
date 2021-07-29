import { Router, Route, Switch, Redirect, BrowserRouterProps, Link } from "react-router-dom";
import history from "./helpers/history";
import { Tabs, Tab, AppBar, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
//Components
import Layout from './Layout'
import AuthRoute from "./componentes/AuthRoute";

//Page
import LoginPage from './pages/LoginPage/LoginPage'
import ListaPersonas from './pages/ListaPersonas/ListaPersonas';
import Informes from './pages/Informes/Informes';
import Cuentas from './pages/Cuentas/Cuentas';
import Aranceles from './pages/Aranceles/Aranceles';
import Barridas from './pages/Barrida/Barridas'
import Caja from './pages/Caja/Caja'



const tabsName = [
  { label: "Cuentas", value: "/cuentas" },
  { label: "Personas", value: "/personas" },
  { label: "Aranceles", value: "/aranceles" },
  { label: "Barridas", value: "/barridas" },
  { label: "Informes", value: "/informes" },
  { label: "Caja", value: "/caja" },
]


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootTab: {
      textTransform: 'none',
      minWidth: '100px',
      minHeight: 35,
      padding: 0,
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '0.9rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },

    tabSelect: {
      color: '#8cbaff',
      fontWeight: 600,
    },
    tab: {
      color: '#90a5c0',
      fontWeight: 400,
      border: 'solid 1px transparent',
    },
    tabs: {
      minHeight: 40,
      background: '#FFF'
    },
    indicator: {
      background: '#8cbaff'
    }
  }))

function App() {
  const classes = useStyles()
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme)


  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Route exact path="/login" component={LoginPage} />
        {/* <Redirect exact from="/" to="/cuentas" /> */}
        <Route path="/" render={({ location }) => (
          <Layout>
            <>
              <Tabs
                value={location.pathname}
                className={classes.tabs}
                classes={{
                  indicator: classes.indicator
                }}>
                {tabsName.map(tab => {
                  return <Tab
                    disableFocusRipple={true}
                    disableRipple={true}
                    className={`${classes.rootTab} ${location.pathname === tab.value ? classes.tabSelect : classes.tab}`}
                    value={tab.value}
                    label={tab.label}
                    component={Link}
                    to={tab.value}
                  />
                })}
              </Tabs>
              <Switch>

                <AuthRoute exact path="/personas">
                  <ListaPersonas />
                </AuthRoute>

                <AuthRoute exact path="/informes">
                  <Informes />
                </AuthRoute>

                <AuthRoute exact path="/cuentas">
                  <Cuentas />
                </AuthRoute>

                <AuthRoute exact path="/aranceles">
                  <Aranceles />
                </AuthRoute>

                <AuthRoute exact path="/barridas">
                  <Barridas />
                </AuthRoute>

                <AuthRoute exact path="/caja">
                  <Caja />
                </AuthRoute>
              </Switch>
            </>
          </Layout>
        )} />

      </Router>
    </ThemeProvider>
  );
}

export default App;
