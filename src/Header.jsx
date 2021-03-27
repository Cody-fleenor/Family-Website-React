import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cody from "./Cody";
import Home from "./Home";
import Nora from "./Nora";
import Beck from './Beck';


const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const navLinks = [
  {title:'Home', path: '/home'},
  {title:'Cody', path: '/cody'},
  {title:'Beck', path: '/beck'},
  {title:'Nora', path: '/nora'},
  {title:'GitHub', path: 'https://github.com/cody-fleenor/Family-Website-React'},
]

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/cody">Cody</Link>
            </li>
            <li>
              <Link to="/beck">Beck</Link>
            </li>
            <li>
              <Link to="/nora">Nora</Link>
            </li>
          </ul>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cody" component={Cody} />
          <Route path="/beck" component={Beck} />
          <Route path="/nora" component={Nora} />
        </div>
      </Router>
    </AppBar>
  );
};

export default Header;