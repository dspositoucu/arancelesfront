import { Router, Route, Switch, Redirect, BrowserRouterProps, Link } from "react-router-dom";
import history from "./helpers/history";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



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


const tabsName = [
  { label: "Cuentas", value: "/cuentas" },
  { label: "Personas", value: "/personas" },
  { label: "Aranceles", value: "/aranceles" },
  { label: "Barridas", value: "/barridas" },
  { label: "Informes", value: "/informes" },
]


const useStyles = makeStyles(theme => ({
  tabSelect: {
    textTransform: 'none',
    minHeight: 35,
    borderRadius: '5px 5px 0px 0px',
    clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
    padding: 0,
    minWidth:'120px',
    fontSize:'12px',
    fontWeight: 700,
    background: '#FFF',
  },
  tab: {
    textTransform: 'none',
    minHeight: 35,
    borderRadius: '5px 5px 0px 0px',
    clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
    padding: 0,
    fontWeight: 400,
    border: 'solid 1px transparent',
    minWidth:'120px',
    fontSize:'12px',
    background: '#f9fafe',
  },
  tabs: {
    minHeight: 35,
  },
  indicator: {
    background:"#fff",
    borderRadius: '5px 5px 0px 0px',
    clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
    opacity:0.5,
    height:35
  }
}))

function App() {
  const classes = useStyles()
  return (
    <>
      <Router history={history}>
        <Route exact path="/login" component={LoginPage} />
        <Switch>
          <Redirect exact from="/" to="/cuentas" />
          <Layout>
            {/* <Redirect exact from="/home" to="/home/cuentas" /> */}

            <Route path="/" render={({ location }) => (
              <>
                <Tabs
                  value={location.pathname}
                  className={classes.tabs}
                  classes={{
                    indicator: classes.indicator
                  }}>
                  {tabsName.map(tab => {
                    return <Tab
                      className={` ${location.pathname === tab.value ? classes.tabSelect : classes.tab}`}
                      label={tab.label}
                      value={tab.value}
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
                </Switch>
              </>
            )} />
          </Layout>
        </Switch>

      </Router>
    </>
  );
}

export default App;
