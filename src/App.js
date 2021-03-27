import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cody from "./Cody";
import Home from "./Home";
import Nora from "./Nora";
import Beck from './Beck';


const App = () => {
  return (
  <div>
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
          <Route path="/home">
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
          </Route>
        </div>
    </Router>
  </div>
  );
};

export default App;
