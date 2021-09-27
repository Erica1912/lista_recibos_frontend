import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Recibo from "./components/Recibo";

function App() {
  return (
    <Router>
      <Switch>        
          <Route path="/recibo/:id">
            <Recibo />
          </Route>
          <Route path="/" exact>
            <Index />
          </Route>        
      </Switch>
    </Router>
  );
}

export default App;
