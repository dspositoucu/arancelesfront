import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Layout from './componentes/Layout'

//Page
import Home from './pages/Home'
import ListaPersonas from './pages/ListaPersonas';
import RegisterPerson from "./pages/RegisterPerson";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/table"} component={ListaPersonas} />
          <Route exact path={"/addPerson"} component={RegisterPerson} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
