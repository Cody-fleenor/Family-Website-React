import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <AppBar position="static" style={{alignItems: "flex-start", justify: "center", padding: 0, border: 0, marginBottom: 10}}>
        <div>
            <ul style={{listStyleType:"none", display: "inline-block" }}>
              <li style={{float:"left"}}><Link to="/Home" style={{color: "white", display: "block", padding: 3, textDecoration:"none"}}>Home</Link></li>
              <li style={{float:"left"}}><Link to="/Beck" style={{color: "white", display: "block", padding: 3, textDecoration:"none"}}>Beck</Link></li>
              <li style={{float:"left"}}><Link to="/Cody" style={{color: "white", display: "block", padding: 3, textDecoration:"none"}}>Cody</Link></li>
              <li style={{float:"left"}}><Link to="/Nora" style={{color: "white", display: "block", padding: 3, textDecoration:"none"}}>Nora</Link></li>
          </ul>
        </div>
    </AppBar>
  );
};

export default NavBar;