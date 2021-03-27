import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    typographyStyles: {
      flex: 1
    },
    ul: {
        listStyleType: "none",
        margin: 0,
        padding: 0
    },
    li: {
        float: "left",
        padding: 5,
        display: "block"
    }
  }));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
        <div>
            <ul ul style={
              {listStyleType: "none", margin:0, padding:0}
              }>
            <li style={
                {float: "left", padding: 5, display: "block" }
              }><Link to="/Home">Home</Link></li>
            <li style={
                {float: "left", padding: 5, display: "block" }
              }><Link to="/Beck">Beck</Link></li>
            <li style={
                {float: "left", padding: 5, display: "block" }
              }><Link to="/Cody">Cody</Link></li>
            <li style={
                {float: "left", padding: 5, display: "block" }
              }><Link to="/Nora">Nora</Link></li>
        </ul>
        </div>
    </AppBar>
  );
};

export default NavBar;