import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Layout from './componentes/Layout'
import Table from './componentes/Table'

//Page
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/table"} component={Table} />
        </Layout>
      </Router>
    </>
  );
}

export default App;
