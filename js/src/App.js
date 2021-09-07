import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./helpers/history";
import { Tabs, Tab, useMediaQuery } from "@material-ui/core";
import { makeStyles, createStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Components
import Layout from './Layout'
import AuthRoute from "./componentes/AuthRoute";

//Page
import LoginPage from './pages/LoginPage/LoginPage'
import Personas from './pages/Personas/Personas';
import Informes from './pages/Informes/Informes';
import Cuentas from './pages/Cuentas/Cuentas';
import Aranceles from './pages/Aranceles/Aranceles';
import Barridas from './pages/Barrida/Barridas'
import Caja from './pages/Caja/Caja'
import AlumnosSao from "./pages/AlumnosSao/AlumnosSao";

function App() {
  const minsm = useMediaQuery('(min-width:600px)')
  const minmd = useMediaQuery('(min-width:960px)')
  const minlg = useMediaQuery('(min-width:1280px)')
  const minxl = useMediaQuery('(min-width:1920px)')

  const sm = (minsm && !minmd)
  const md = (minmd && !minlg)
  const lg = (minlg && !minxl)
  const xl = minxl

  const outerTheme = createMuiTheme({
    spacing: sm ? 3.25 : md ? 3.5 : lg ? 3.5 : 8,
    typography: {
      fontSize: sm ? 12 : md ? 12 : lg ? 14 : 15,
    },
    palette: {
      primary: {
        main: "#395596"
      },
    }
  })

  return (
    <ThemeProvider theme={outerTheme}>
      <Router history={history}>
        <Route exact path="/login" component={LoginPage} />
        {/* <Redirect exact from="/" to="/cuentas" /> */}
        <Route path="/">
          <Layout>
            <Switch>
              <AuthRoute exact path="/personas">
                <Personas />
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

              <AuthRoute exact path="/alumnos_sao">
                <AlumnosSao />
              </AuthRoute>
            </Switch>
          </Layout>
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
