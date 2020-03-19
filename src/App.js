import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Register from './Register.js';
function App() {
  return (
    <React.Fragment>
      
    	<Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
