import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Layout from './componentes/Layout'

//Page
import Home from './pages/Home'
import ListaPersonas from './pages/ListaPersonas';

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Layout>
          <Route exact path={"/table"} component={ListaPersonas} />
        </Layout>
      </Switch>
      </Router>
    </>
  );
}

export default App;
