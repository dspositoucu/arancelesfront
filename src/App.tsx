import { Router, Route, Switch, Redirect, BrowserRouterProps } from "react-router-dom";
import history from "./helpers/history";

//Components
import Layout from './componentes/Layout'
import AuthRoute from "./componentes/AuthRoute";

//Page
import LoginPage from './pages/LoginPage/LoginPage'
import ListaPersonas from './pages/ListaPersonas/ListaPersonas';
import Informes from './pages/Informes/Informes';
import Cuentas from './pages/Cuentas/Cuentas';
import Aranceles from './pages/Aranceles/Aranceles';
import Barridas from './pages/Barrida/Barridas'


function App() {

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage} />

          <Layout>
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
          </Layout>

        </Switch>
      </Router>
    </>
  );
}

export default App;
