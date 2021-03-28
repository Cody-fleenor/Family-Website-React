import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Link} from "react-router-dom"

const useStyles = makeStyles({

  ul:{
    listStyleType:"none",
    display: "inline-block"
    },
  link: {
    float: "left",
    color: "white",
    display: "block",
    paddingLeft: 3,
    textDecoration: "none"
  },
  navBarStyles:{
    position: "static",
    alignItems: "flex-start",
    justify:"center",
    padding: 0,
    border: 0,
    marginBottom: 10
  }
})

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navBarStyles}>
        <div>
            <ul className={classes.ul}>
              <li className={classes.link}>
                <Link className={classes.link} to="/Home">
                  Home
                </Link>
              </li>
              <li className={classes.link}>
                <Link className={classes.link} to="/Beck">
                  Beck
                </Link>
              </li>
              <li className={classes.link}>
                <Link to="/Cody" className={classes.link}>
                  Cody
                </Link>
              </li>
              <li className={classes.link}>
                <Link to="/Nora" className={classes.link}>
                  Nora
                </Link>
              </li>
          </ul>
        </div>
    </AppBar>
  );
};

export default NavBar;