import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <Switch>
        <div className="Container">
          <Route path="/" exact>
          <Index />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
