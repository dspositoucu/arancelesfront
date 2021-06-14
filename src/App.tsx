import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Layout from './componentes/Layout'

//Page
import Home from './pages/Home'
import ListaPersonas from './pages/ListaPersonas';
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/table"} component={ListaPersonas} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
