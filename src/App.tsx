import { Router, Route, Switch, Redirect, BrowserRouterProps } from "react-router-dom";
import history from "./helpers/history";

//Components
import Layout from './componentes/Layout'
import AuthRoute from "./componentes/AuthRoute";

//Page
import LoginPage from './pages/LoginPage'
import ListaPersonas from './pages/ListaPersonas';


function App() {
  
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginPage}/> 

          <AuthRoute exact path="/table">
            <Layout>
              <ListaPersonas />
            </Layout>
          </AuthRoute>

        </Switch>
      </Router>
    </>
  );
}

export default App;
