import { Router, Route, Switch, Redirect, BrowserRouterProps } from "react-router-dom";
import history from "./helpers/history";

//Components
import Layout from './componentes/Layout'
import AuthRoute from "./componentes/AuthRoute";

//Page
import LoginPage from './pages/LoginPage'
import ListaPersonas from './pages/ListaPersonas';
import Informes from './pages/Informes';
import Cuentas from './pages/cuentas';


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
          </Layout>

        </Switch>
      </Router>
    </>
  );
}

export default App;
