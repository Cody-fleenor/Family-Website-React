import React from 'react';
import Home from "../pgs/Home";
import Beck from "../pgs/Beck";
import Cody from "../pgs/Cody";
import Nora from "../pgs/Nora";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

 const Routes = () => {
    return (
    <Router>
      <div>
        <div>
            <NavBar />
        </div>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Beck" component={Beck} />
          <Route exact path="/Cody" component={Cody} />
          <Route exact path="/Nora" component={Nora} />
        </Switch>
      </div>
    </Router>
    );
  };

  export default Routes;

