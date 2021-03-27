import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cody from "../pgs/Cody";
import Home from "../pgs/Home";
import Nora from "../pgs/Nora";
import Beck from '../pgs/Beck';


const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));


const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
        <Router>
          <div>
            <ul style={
              {listStyleType: "none", margin:0, padding:0}
              }>
              <li style={
                {float: "left", padding: 5, display: "block" }
              }>
                <Link to="/home">Home</Link>
              </li>
              <li style={
                {float: "left", padding: 5, display: "block" }
              }>
                <Link to="/cody">Cody</Link>
              </li>
              <li style={
                {float: "left", padding: 5, display: "block" }
              }>
                <Link to="/beck">Beck</Link>
              </li>
              <li style={
                {float: "left", padding: 5, display: "block" }
              }>
                <Link to="/nora">Nora</Link>
              </li>
            </ul>
            {/* <Route path="/home">
              <Home />
            </Route>
            <Route path="/cody">
              <Cody />
            </Route>
            <Route path="/beck">
              <Beck />
            </Route>
            <Route path="/nora">
              <Nora />
            </Route> */}
          </div>
      </Router>
    </AppBar>
  );
};

export default Header;